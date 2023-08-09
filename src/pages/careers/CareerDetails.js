import { useLoaderData, useParams } from "react-router-dom"

export default function CareerDetails() {
    const { id } = useParams();
    const career = useLoaderData();

    return(
        <div className="career-details">
            <h2>Career Details for {career.title}</h2>
            <p>Starting Salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea dolores repudiandae possimus culpa, eligendi id hic adipisci cum ratione quod, quae explicabo aliquid quibusdam delectus voluptate modi velit eius error!</p>
            </div>
        </div>
    )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch('http://localhost:4000/careers/' + id);

    if(!res.ok){
        throw Error('Could not find that career.')
    }

    return res.json();
}