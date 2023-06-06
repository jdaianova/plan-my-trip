import Header from "./Header";
import Footer from "./Footer";
import ContactForm from "./ContactForm";

function Contacts() {
    return (
        <div className="App">
            <Header />
            <div className="Content">
                <h2> Feel free to ask us any question</h2>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}

export default Contacts;