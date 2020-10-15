import React from 'react'

const FilmCard = (props) => {
    return (
        <>
            <div className="col-md-6">
                <div className="card shadow mb-2">
                    <div className="card-body">
                        <h4 className="card-title text-primary mb-3">{props.film.title} ({props.film.release_date})</h4>
                        <h6 className="card-subtitle mb-2 text-muted">Directed by {props.film.director}</h6>
                        <p className="card-text text-info">{props.film.description}</p>
                        <h6 className="card-subtitle mb-2 text-danger">Rotten Tomatoes {props.film.rt_score}%</h6>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FilmCard
