export default function Header() {
    return (
    <nav>
        <div className='bg-cod-gray-950 p-4 h-16 flex justify-between items-center text-white text-base'>
            <div className='cs-title'>
                <h1>Steven Castro</h1>
            </div>
            <div className='cs-directory'>
                <ul className='flex'>
                    <li className='px-4'>About</li>
                    <li>Education</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </nav>
    )
}