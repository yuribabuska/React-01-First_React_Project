import { CORE_CONCEPTS } from '../Data';
import CoreConcept from '../components/CoreConcept';


export default function CoreConcepts(){
    return (

        <section id="core-concepts">
                  <h2>Core Concepts</h2>
        
                  <ul>
                    {CORE_CONCEPTS.map( (conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>) )}
                    
                    {/*  Two other ways: 
                    <CoreConcept {...CORE_CONCEPTS[2]} />
                    <CoreConcept title={CORE_CONCEPTS[3].title}
                      description={CORE_CONCEPTS[3].description}
                      image={CORE_CONCEPTS[3].image}
                    /> */}
                  </ul>
                </section>
    );
}
