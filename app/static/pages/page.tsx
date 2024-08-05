import { h } from "preact";
interface HomeProps {
    path: string;
}

const Home = ({ path }: HomeProps) => {
    return (
        <main>
            <h1 className='text-red-500'>Home Page</h1>
            <p>Welcome to the Home Page!</p>
        </main>
    );
};

export default Home;