import React, { useState, Component } from 'react';
import RecorderControls from "./recorder-controls";
import { createStyles,makeStyles,Typography,Paper,Button,TextField, MenuItem } from '@material-ui/core';
import useRecorder from "../hooks/use-recorder";
import { UseRecorder } from "types/recorder";
import "app.css";
import SurroundSound from '@material-ui/icons/SurroundSound';
import SavePref from '@material-ui/icons/Save';
import { AudioConfig, SpeechConfig, SpeechRecognizer, SpeechSynthesizer } from 'microsoft-cognitiveservices-speech-sdk';
import {AzureSASCredential, TableClient} from "@azure/data-tables";
import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';
import * as dotenv from "dotenv";
import { Stream } from 'stream';

dotenv.config();

const tablesUrl = `https://namesounds.table.core.windows.net/namesoundtbl`;
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

//const storageConfigured = isStorageConfigured();
export default function App() {
  const { recorderState, ...handlers }: UseRecorder = useRecorder();
  const { audio } = recorderState;
  const classes = useStyles();

  type Values = {
    dname : string,
    empid : string,
    fname : string,
    lname : string,
    pname: string,
    country: string,
    fileURL: string
  }

  const [values,setValues] = useState<Values>({
    dname : "",
    empid : "",
    fname : "",
    lname : "",
    pname : "",
    country : "",
    fileURL : ""
  });

  const [blobList, setBlobList] = useState<string[]>([]);
  const [locale, setLocale] = useState("");
  const [recordState, setRecordState] = useState(null);

  const handleSelectChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setLocale(event.target.value);
  };

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setValues({...values,[event.target.id] : event.target.value});
    window.name = values.empid;
  }

  const countries = [
    {value : "en-US", label : "English (United States)"},
    {value : "fr-CA", label : "French (Canada)"},
    {value : "zh-CN", label : "Chinese (Mandarin, Simplified)"},
    {value : "nl-NL", label : "Dutch (Netherlands)"},
    {value : "en-GB", label : "English (United Kingdom)"},
    {value : "fr-FR", label : "French (France)"},
    {value : "de-DE", label : "German (Germany)"},
    {value : "el-GR", label : "Greek (Greece)"},
    {value : "hi-IN", label : "Hindi (India)"},
    {value : "ja-JP", label : "Japanese (Japan)"},
    {value : "pl-PL", label : "Polish (Poland)"},
    {value : "ru-RU", label : "Russian (Russia)"},
    {value : "es-US", label : "Spanish (US)"},
    {value : "ta-IN", label : "Tamil (India)"},
    {value : "zu-ZA", label : "Zulu (South Africa)"}
  ]

  const ttsToSpeaker = async () => {
    const speechConfig = SpeechConfig.fromSubscription('d2bc30448c6f418c9e2be947deeabab8','eastus');
    speechConfig.speechSynthesisLanguage = locale;
    const audioConfig = AudioConfig.fromDefaultSpeakerOutput();
    const synthesizer = new SpeechSynthesizer(speechConfig,audioConfig);
    var namepref = "";
    
    if(values.pname.trim() == '')
    {
      namepref = values.fname + " " + values.lname;
    }
    else
    {
      namepref = values.pname;
      
    }
    synthesizer.speakTextAsync(namepref,
      (result) => {
        console.log(result);
        return result.audioData;
      }
    );
  }

  interface Entity{
    partitionKey: string;
    rowKey: string;
    FirstName: string;
    LastName: string;
    PreferredName:string;
    Locale: string;
    NameSoundUrl: string
  }

  /*
  *
  * Updates and upserts entities in a table
  */
  async function updateAndUpsertEntities(){
    console.log("== Updates and Upsert Entities ==");
    
    const tableName = `namesoundtbl`;

    const client = new TableClient(`${tablesUrl}` ,tableName, new AzureSASCredential(sasToken));

    const entity: Entity = {
      partitionKey: "CTO",
      rowKey: values.empid,
      FirstName: values.fname,
      LastName: values.lname,
      PreferredName: values.pname,
      Locale: locale,
      NameSoundUrl: "",
    };
    try{
      await client.createEntity(entity);
    }
    catch(err){
      console.log(err);
    }
    
  }

  const savePreference = async () => {
    await updateAndUpsertEntities();
    const blobService = new BlobServiceClient(
      `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
    );
    const containerClient: ContainerClient = blobService.getContainerClient(containerName);
    const toBlobName = values.empid.toString() + '.ogg';
    const tempBlobName = "tempPref.ogg";
    
    const sourceBlob = containerClient.getBlockBlobClient(tempBlobName);
    const targetBlob = containerClient.getBlockBlobClient(toBlobName);

    console.log(window.name);
    //targetBlob.syncUploadFromURL((await sourceBlob.generateSasUrl()).toString);
  }

  return (
    <div className={classes.sectionContainer}>
      <div className={classes.title}><h1>My Name Is...</h1></div>

          <div className="{classes.form}"> 
              <section className="voice-recorder">
              <TextField onChange={handleChange} defaultValue="CTO" label={"Department Name"} id={"dname"}/>  
              <TextField onChange={handleChange} label={"Employee Id"} id={"empid"}/>  
              <TextField onChange={handleChange} label={"First Name"} id={"fname"}/>  
              <TextField onChange={handleChange} label={"Last Name"} id={"lname"}/>      
              <TextField onChange={handleChange} label={"Preferred Name"} id={"pname"}/>
              
              <TextField select onChange={handleSelectChange} id={"locale"} label="Select" variant="standard" helperText="Please select your locale">
                {countries.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField> 
              <div>  
              <br/>
              <Button startIcon={<SurroundSound/>} className="recorder-container" onClick={ttsToSpeaker} color="primary" variant="contained">Suggested Pronunciation</Button>
            </div>
              <br></br>
              <h4>Don't like the usual? Record your own...</h4>
              <div className="recorder-container">
                <br/>
                <RecorderControls recorderState={recorderState} handlers={handlers} />
              </div>
              <br></br>
              <br></br>
              <div>
                <Button startIcon={<SavePref/>} className="recorder-container" onClick={savePreference} color="primary" variant="contained" >Save Your Preference</Button> 
              </div>
            </section>
            </div>
           
      </div>
  );
}
