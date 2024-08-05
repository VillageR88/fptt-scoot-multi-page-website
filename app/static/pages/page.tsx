import { h } from "preact";
interface HomeProps {
    path: string;
}

const Home = ({ path }: HomeProps) => {
    return (
        <main className="mb-auto flex flex-col items-center max-w-[1440px]">
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
        </main>
    );
};

export default Home;