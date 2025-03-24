import Personal from "../components/Personal";
import Experience from "../components/Experience";
import Education from "../components/Education";

function Form(){
    return (
        <section className="form">
            <Personal />
            <Education />
            <Experience />
        </section>
    );
}

export default Form;