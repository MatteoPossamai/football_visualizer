import Header  from "./header";
import Content from "./content";
import Footer  from "./footer";

function Base(){
    return (
        <div className="flex-wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Base;