
import Job from "./Job"

const Jobs = () => {
    return (
        <main>
        <Job  title="Full Stack React Dev" className="box-green"  contractType="CDI" country="Japon" city="Tokio"/>
        <Job title="Software Developer at Tech Innovators Inc." className="box-red"  contractType="STAGE" country="Brazil" city="Tokio"/>
        <Job title="Full Stack React Dev" className="box-blue"  contractType="CDD" country="South Africa" city="Pretoria"/>
        <Job title="Data Scientist at Innovate Analytics" className="box-yellow"  contractType="CDI" country="Canada" city="Ontario"/>
        <Job title="Full Stack React Dev" className="box-purple"  contractType="CDD" country="Australia" city="Canberra"/>
        <Job title="Human Resources Specialist at People First Solutions" className="box-orange"  contractType="CDI" country="Egypt" city="Cairo"/>
        <Job title="Customer Service Representative" className="box-pink"  contractType="ALTERNANCE" country="Spain" city="Madrid"/>

        <Job title="Content Writer at Wordsmiths Unlimited" className="box-green"  contractType="CDI" country="Japon" city="Tokio"/>

        <Job title="Graphic Designer at Visual Creations Studio" className="box-lightblue"  contractType="CDI" country="Japon" city="Tokio"/>
       
        </main>
    )
}

export default Jobs