import React, {useState} from "react";
import { createStyles,makeStyles,Button,TextField, IconButton } from '@material-ui/core';
import { SearchOutlined } from "@material-ui/icons";
import "app.css";
import {AzureSASCredential, TableClient, odata} from "@azure/data-tables";
import { AudioConfig, SpeechConfig, SpeechRecognizer, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';
import StdSurroundSound from '@material-ui/icons/SurroundSoundOutlined';
import SearchIcon from '@material-ui/icons/SearchSharp';

const tablesUrl = `https://namesounds.table.core.windows.net/`;
const sasToken = `?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacupitfx&se=2022-06-04T11:04:15Z&st=2022-05-16T03:04:15Z&spr=https&sig=%2FE19l%2Fqu9HXhv4cC4B%2FKipxUWdSEF19J%2FrdKmnyYI%2Fg%3D`;
const storageAccountName = `namesounds`; 
const containerName = `pref-sounds`;

const useStyles = makeStyles(() => createStyles({
    form : {
      display : "flex",
      flexDirection : "column"
    },
  
    container:{
      backgroundColor : "#f2dedc",
      position : "absolute",
      top : "50%",
      left : "50%",
      transform : "translate(-50%,-50%)",
      padding : 30,
      textAlign : "center"
    },
  
    title : {
      margin : "0px 0 20px 0",
      textAlign : "center"
    },
  
    button : {
      margin:"20px 0",
      color:"#fff"
    },
  
    sectionContainer : {
      margingTop: 2,
      paddingHorizontal: 24,
    },
  
    sectionTitle: {
      fontSize: 24,
      fontWeight: 500,
    },
  
  }))

var url='';
function Search(){
   
    //var url = `https://namesounds.blob.core.windows.net/pref-sounds/tempPref.ogg?sp=racwdyt&st=2022-05-16T17:28:34Z&se=2022-05-17T01:28:34Z&spr=https&sv=2020-08-04&sr=b&sig=ShZrxfRxGJDwlrva7bA%2BuaIKSJGMsbgtMVi22FTvnWA%3D`;

    const classes = useStyles();
    const [locale, setLocale] = useState("");
    const [dname, setDeptName] = useState("");
    const [empid, setEmpId] = useState("");
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [pname, setPrefName] = useState("");
    const [searchstr, setSearchString] = useState("");

    const handleSearchChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
      };

    const handleLocaleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setLocale(event.target.value);
      };
    
    const handleDeptChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setDeptName(event.target.value);
      };
    
    const handleEmpIdChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setEmpId(event.target.value);
      };

    const handleFNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
      };

    const handleLNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
      }; 
    
    const handlePrefNameChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setPrefName(event.target.value);
      }; 

    interface Entity{
        partitionKey: string;
        rowKey: string;
        FirstName: string;
        LastName: string;
        PreferredName:string;
        Locale: string;
        NameSoundUrl: string
      }

    const getResults = async () => {
        
        const tableName = `namesoundtbl`;
        const client = new TableClient(`${tablesUrl}`,tableName, new AzureSASCredential(sasToken));
        const qryName = "Test1"
        const entity = await client.getEntity<Entity>("CTO",searchstr);
        console.log(entity.FirstName);
        setLocale(entity.Locale);
        setDeptName(entity.partitionKey);
        setEmpId(entity.rowKey);
        setFirstName(entity.FirstName);
        setLastName(entity.LastName);
        setPrefName(entity.PreferredName);
        url = entity.NameSoundUrl;
        console.log(url);
    }

    const ttsToSpeaker = async () => {
      const speechConfig = SpeechConfig.fromSubscription('00a6226c69b342d1b527d2df85266637','eastus');
      speechConfig.speechSynthesisLanguage = locale;
      const audioConfig = AudioConfig.fromDefaultSpeakerOutput();
      const synthesizer = new SpeechSynthesizer(speechConfig,audioConfig);
      var namepref = "";
      if(pname.trim() == '')
      {
        namepref = fname + " " + lname;
      }
      else
      {
        namepref = pname;
      }
      synthesizer.speakTextAsync(namepref,
        (result) => {
          return result.audioData;
        }
      );
    }
   
    const playAudio = async () => {
      //const url = `https://namesounds.blob.core.windows.net/pref-sounds/tempPref.ogg?sp=racwdyt&st=2022-05-16T17:28:34Z&se=2022-05-17T01:28:34Z&spr=https&sv=2020-08-04&sr=b&sig=ShZrxfRxGJDwlrva7bA%2BuaIKSJGMsbgtMVi22FTvnWA%3D`;
      try{  
        url = `https://${storageAccountName}.blob.core.windows.net/${containerName}/${empid}.ogg`;
        const audio = new Audio(url);
        try{
          await audio.play();
        }
        catch(err)
        {
          ttsToSpeaker();
        }
        console.log(url);
      }
      catch(err)
      {
        console.log(err);
      }
    }
    
    return(
        <div className={classes.sectionContainer}>
        <div className={classes.title}><h1>Search Name Sounds</h1></div>
  
            <div className="{classes.form}"> 
                <section className="searchContainer">
                <TextField 
                   fullWidth
                   id="search"
                   variant="outlined"
                   onChange={handleSearchChange}
                   value={searchstr}
                   InputProps={{
                       endAdornment: (
                           <IconButton>
                               <SearchOutlined></SearchOutlined>
                           </IconButton>
                       )
                   }}
                    />
                     <br></br>
                  <Button className="recorder-container" startIcon={<SearchIcon/>} onClick={getResults} color="primary" variant="contained">Search</Button>
                <br></br>
                <h6>Department Name</h6> <TextField onChange={handleDeptChange} value={dname} id={"dname"}/>  
                <h6 >Employee Id</h6><TextField onChange={handleEmpIdChange} value={empid} id={"empid"}/>  
                <h6 >First Name</h6><TextField onChange={handleFNameChange} value={fname}  id={"fname"}/>  
                <h6 >Last Name</h6><TextField onChange={handleLNameChange} value={lname} id={"lname"}/>      
                <h6 >Preferred Name</h6><TextField onChange={handlePrefNameChange} value={pname} id={"pname"}/>
                <h6>Locale</h6><TextField onChange={handleLocaleChange} value={locale} id={"locale"}/>
                <br></br>
                <Button className="recorder-container" startIcon={<StdSurroundSound/>} onClick={playAudio} color="primary" variant="contained">Standard Pronunciation</Button>
                </section>
            </div>
        </div>
    )
}
export default Search;