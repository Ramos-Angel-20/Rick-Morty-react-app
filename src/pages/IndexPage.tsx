import CharactersList from '../components/CharactersList';

import background from '../assets/wp1822724.jpg';

const IndexPage = () => {
    return (
        <div className='index-page'>
            <div className='index-page__backgroundImage'>
                <img src={background} alt="Rick & Morty API" />
                <h1>Rick & Morty API</h1>
            </div>

            <section className='index-page__character-container'>
                <CharactersList />
            </section>
        </div>
    );
}

export default IndexPage;
