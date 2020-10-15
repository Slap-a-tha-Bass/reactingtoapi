import React from 'react';
import FilmCard from './components/FilmCard';
import PersonCard from './components/PersonCard';

export default class App extends React.Component {

    state = {
        films: [],
        people: [],
        filmsLoaded: false,
        peopleLoaded: false
    }

    componentDidMount() {
        fetch('http://ghibliapi.herokuapp.com/films')
            .then(res => res.json())
            .then(films => this.setState({ films }))
        fetch('http://ghibliapi.herokuapp.com/people')
            .then(res => res.json())
            .then(people => this.setState({ people }))
    }



    render() {
        const { films } = this.state;
        const { people } = this.state;
        if (this.state.filmsLoaded) {
            return (
                <>
                    <main className="container mt-5">
                        <section className="row justify-content-center">
                            {films?.map(film => {
                                return <FilmCard key={film.id} film={film} />
                            })}
                        </section>
                    </main>
                </>)
        } else if (this.state.peopleLoaded) {
            return (
                <>
                    <main className="container mt-5">
                        <section className="row justify-content-center">
                            {people?.map(person => {
                                return <PersonCard key={person.id} person={person} />
                            })}
                        </section>
                    </main>
                </>
            )
        } else {
            return (
                <>
                    <button className="btn btn-primary m-2" onClick={() => {
                        this.setState({ filmsLoaded: true })
                    }}>Load Films</button>

                    <button className="btn btn-secondary m-2" onClick={() => {
                        this.setState({ peopleLoaded: true })
                    }}>Load People</button>


                </>
            )
        }
    }
}

