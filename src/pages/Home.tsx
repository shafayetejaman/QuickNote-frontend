import NavBar from "../component/layout/NavBar"

export default function Home() {
    return (
        <div className="flex">
            <div className="h-screen bg-primary sm:w-[25%] w-0">
                <NavBar />
            </div>
            <div className="bg-secondary h-screen w-full">
                <div className=""></div>
            </div>
        </div>
    )
}
