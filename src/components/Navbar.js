function NavBar() {

    const name = '{ Cody }'

    return (
        <div className="px-16 navbar justify-center flex items-center h-24">
            <h1 className="w-full text-4xl font-medium tracking-widest text-[#F35B04]"> {name} </h1>
            <ul className="flex whitespace-nowrap">
                <li className="p-4"><a href="#">Sign in</a></li>
                <li className="p-4"><a href="#">Sign out</a></li>
                <li className="p-4"><a href="#">Profile</a></li>
                <li className="p-4"><a href="#">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar