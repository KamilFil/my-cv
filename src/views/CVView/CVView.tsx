import { cvData } from "../../data/data.ts";
import './style.scss';

export const CVView = () => {


    return (
        <main className="cv-main">
            <header className='cv-header'>
            <h1>CV - {cvData.name} {cvData.lastName}</h1>
            </header>
            <aside className='cv-personal'>
                <h2>Personal Information</h2>
                <img className="cv-photo" src={ cvData.photo } alt={`${ cvData.name } - ${ cvData.lastName } - photo cv`} />
                <p>{ cvData.name } { cvData.lastName }</p>
                <small>{ cvData.position }</small>
            </aside>
            <section className='cv-details'>
                <h2>Experience</h2>
                <ul>
                    { cvData.experience.map((experience) => (
                        <li key={experience.year}>
                            <strong>{ experience.year }</strong>
                            <p>{ experience.description }</p>
                        </li>
                    )) }
                </ul>
                <h2>Education</h2>
                <ul>
                    { cvData.education.map((education, index) => (
                        <li key={index}>
                            <p>{ education }</p>
                        </li>
                    )) }
                </ul>
            </section>
        </main>
    )
}