import SingleCard from "../SingleCard/SingleCard";

export default function Dashboard() {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            {array.map((e) => <SingleCard key={e} />)}
        </>    
    )
}