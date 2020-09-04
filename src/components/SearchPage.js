import React, {Component} from 'react';
import styles from '../components/mystyle.module.css'
import { Button } from 'reactstrap';
import Select from 'react-select';
import SemiNav from '../components/SemiNav';
import Foot from '../components/Foot';
import './search.css';
 
  const From = [
    { value: "18",label: "18"},{ value: "19",label: "19"},{ value: "20",label: "20"},
    { value: "21",label: "21"},{value: "22", label: "22"},{ value: "23",label: "23"},
    { value: "24",label: "24"},{ value: "25",label: "25"},{ value: "26",label: "26"},
    { value: "27",label: "27"},{ value: "28",label: "28"},{ value: "29",label: "29"},
    { value: "30",label: "30"},{ value: "31",label: "31"},{ value: "32",label: "32"},
    { value: "33",label: "33"},{ value: "34",label: "34"},{ value: "35",label: "35"},
    { value: "36",label: "36"},{ value: "37",label: "37"},{ value: "38",label: "38"},
    { value: "39",label: "39"},{ value: "40",label: "40"},{ value: "41",label: "41"},
    { value: "42",label: "42"},{ value: "43",label: "43"},{ value: "44",label: "44"},
    { value: "45",label: "45"},{ value: "46",label: "46"},{ value: "47",label: "47"}
  ];
  const Gender = [
    { value: "F", label:"Male"},
    { value: "FM", label:"Female"}
  ];
  const Caste = [
    { value: "1", label:"Doesn't Matter"},{ value: "2", label:"Badi"},{ value: "3", label:"Bhote"},
    { value: "4", label:"Bhujel"},{ value: "5", label:"Brahmin"},{ value: "6", label:"Chamar"},
    { value: "7", label:"Chepang"},{ value: "8", label:"Damai"},{ value: "9", label:"Dasnami"},
    { value: "10", label:"Dhanuk"},{ value: "11", label:"Dhimal"},{ value: "12", label:"Dhobi"},
    { value: "13", label:"Gaine"},{ value: "14", label:"Gurung"},{ value: "15", label:"Kalwar"},{ value: "16", label:"Kami"},
    { value: "17", label:"Kanu/Haluwai"},{ value: "18", label:"Kathabaniyan"},{ value: "19", label:"Kewat"},{ value: "20", label:"Koiri/Kushwaha"},
    { value: "21", label:"Kshetri/Chhetri"},{ value: "22", label:"Kumal"},
    { value: "23", label:"Kurmi"},{ value: "24", label:"Limbu"},{ value: "25", label:"Lohar"},{ value: "26", label:"Magar"},
    { value: "27", label:"Majhi"},{ value: "28", label:"Mallaha"},{ value: "29", label:"Marwadi"},{ value: "30", label:"Musahar"},
    { value: "31", label:"Musalman"},{ value: "32", label:"Newar"},
    { value: "33", label:"Pahadi"},{ value: "34", label:"Pasi"},{ value: "35", label:"Rai"},{ value: "36", label:"Rajbanshi"},
    { value: "37", label:"Sarki"},{ value: "38", label:"Sherpa"},{ value: "39", label:"Sunwar"},{ value: "40", label:"Tamang"},
    { value: "41", label:"Teli"},{ value: "42", label:"Thakali"},{ value: "43", label:"Thakur"},
    { value: "44", label:"Thakuri"},{ value: "45", label:"Tharu"},{ value: "46", label:"Yadav"},
    { value: "47", label:"Others"}
  ];
  const Religion = [
    { value: "1", label:"Doesn't Matter"},{ value: "2", label:"Hindu"},{ value: "3", label:"Buddhist"},
    { value: "4", label:"Christanity"},{ value: "5", label:"Muslim"},{ value: "6", label:"Sikh"},
    { value: "7", label:"Others"}
  ];

  const Feet = [
    { value: "1", label:"3"},{ value: "2", label:"4"},{ value: "3", label:"5"},
    { value: "4", label:"6"},{ value: "5", label:"7"},{ value: "6", label:"8"},
    { value: "7", label:"9"}
  ];
  const Inch = [
    { value: "1", label:"1"},{ value: "2", label:"2"},{ value: "3", label:"3"},
    { value: "4", label:"4"},{ value: "5", label:"5"},{ value: "6", label:"6"},
    { value: "7", label:"7"},{ value: "8", label:"8"},{ value: "9", label:"9"},
    { value: "10", label:"10"},
  ];
  const Education=[
    { value: "1", label:"Doesn't Matter"},{ value: "2", label:"Associate Degree"},{ value: "3", label:"Bachelor Degree"},
    { value: "4", label:"Diploma"},{ value: "5", label:"Doctorate"},{ value: "6", label:"High School"},
    { value: "7", label:"Less than High School"},{ value: "8", label:"Master Degree"},{ value: "9", label:"Technical School"},
    { value: "10", label:"Others"},
  ]
  const Occupation = [
    { value: "1", label:"Doesn't Matter"},{ value: "2", label:"Accounting Banking and Finance"},{ value: "3", label:"Administration and HR"},
    { value: "4", label:"Advertising Media and Entertainment"},{ value: "5", label:"Agriculture"},{ value: "6", label:"Airline and Aviation"},
    { value: "7", label:"Architecture and Design"},{ value: "8", label:"Artist Animators and Web Designers"},{ value: "9", label:"BPO/KPO and Customer Support"},
    { value: "10", label:"Beauty Fashion and Jewellery Designer"},{ value: "11", label:"Civil Service/Law Enforcement"},{ value: "12", label:"Corporate prefessional"},
    { value: "13", label:"Defence"},{ value: "14", label:"Education and Training"},{ value: "15", label:"Engineering"},{ value: "16", label:"Hotel and Hospitality"},
    { value: "17", label:"IT and Software Engineer"},{ value: "18", label:"Medical and Health Care"},{ value: "19", label:"Sales and Marketing"},{ value: "20", label:"Others"},
  ];
  
class SearchPage extends Component  {
    render() {
        return (
            <>
            <div id="search-page">
            <SemiNav />
            <div className="search-section" id="home">
            <ul class="flex-container">
            <li class="flex-item">
            <form>
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <h1 style={{textAlign:"center"}}>Search Your Partner</h1>
                        </div>
                    <div className="col-md-3">
                        <br></br>
                            <Select options={Gender}  placeholder="I am Looking for a"/>
                    </div>
                        <div className="col-md-2">
                        <br></br> 
                        <Select options={From} placeholder=" Age From" />
                        </div>
                        <div className="col-md-2">
                        <br></br>
                        <Select options={From} placeholder=" Age To" />
                        </div>
                        <div className="col-md-2">
                        <br></br>
                        <Select options={Caste} placeholder="Caste" />
                        </div>
                        <div className="col-md-2">
                        <br></br>
                        <Select options={Religion} placeholder="Religion" />
                        </div>
                        <div className="col-md-2">
                        <br></br>
                        <Select options={Feet} placeholder="Height(Feet)" style={{dropup:true}}/>
                        </div>
                        <div className="col-md-2">
                        <br></br>
                        <Select options={Inch} placeholder="Height(Inch)" />
                        </div>
                        <div className="col-md-3">
                        <br></br>
                        <Select options={Education} placeholder="Education" />
                        </div>
                        <div className="col-md-3">
                        <br></br>
                        <Select options={Occupation} placeholder="Occupation" />
                        </div>
                        <div className="col-md-2">
                        <br></br>
                        <Button color="danger" size="sm" className={styles.button}>Search</Button>{" "}
                        <br></br>
                        </div>
                        <div className="col-md-12">
                        <br></br>
                        </div>
                    </div>
                    
                    </div>
                </form>
            </li>
            <li>
            <div className="search-container">
            <div className="result-section-container">
                        
                </div>
            
                </div>
            </li>
            <li>
            <div className="search-container">
            <div className="result-section-container">
                        
                </div>
            
                </div>
            </li>
            <li>
            <div className="search-container">
            <div className="result-section-container">
                        
                </div>
            
                </div>
            </li>
          
            </ul>
            </div>
            <Foot/>
            </div>
            
        </>
             
        );
    }
}
 
export default SearchPage;