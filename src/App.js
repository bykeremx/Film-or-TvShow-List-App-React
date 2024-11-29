
//reacstrap 
//bootstrap dahil edilecek 

import { Container, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
//added axios 
import axios from "axios";
//film cardları için dahil et 

import FilmCard from "./components/FilmCard";
import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";



//toostify uyarı mesajları için bir paket 
function App() {
  //props .... 
  //filma adı
  const [filmname, setFilname] = useState('');
  //yıl 
  const [year, setYear] = useState('');
  //films 
  const [films, setFilms] = useState([])

  const GetFilms = async (apikey) => {
    try {
      const req = await axios.get(`http://www.omdbapi.com/?s=${filmname}&y=${year}&apikey=${apikey}`)
      const myfilm = req.data;
      setFilms(myfilm.Search);

    } catch (error) {
      console.log(error.message);
    }
  }
 

  const HadleButton = () => {
    if (filmname) GetFilms("");
    console.log(films)
  }


  return (
    <>
      <Container className="mt-3">

        <h1>Film and TvShows İnfo </h1>
        <b>Created By Kerem Mutlu. </b>
        <hr />

      </Container>
      <Container>
        <Row>
          <Col md={12}>
            <h3>
              <FaMagnifyingGlass/>
              Search :  {filmname}  {year}</h3>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">
                Film and TvShows Name ?
              </Label>
              <Input
                id="tvshows"
                name="tvshows"
                placeholder="plaese enter film and tv show name exam : batman... "
                type="text"
                value={filmname}
                onChange={(event) => setFilname(event.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">
                Years ?
              </Label>
              <Input
                id="year"
                name="year"
                placeholder="please enter year... exam: 2009 ... "
                type="text"
                value={year}
                onChange={(event) => setYear(event.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <hr />
        <Container>
          <Row>
            <Button color="primary" onClick={HadleButton}>
              Searc Movie !
            </Button>
          </Row>
        </Container>


        <hr />
        <Container>
          <Row>

            {films ? films.map((film, index) => (
              <FilmCard key={index} films={film} />
            )) : 'Not Found '}
          </Row>
        </Container>
      </Container>

    </>
  );
}

export default App;
