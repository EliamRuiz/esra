// import cvRaw from "../src/cv.json"


const Cv = () => {

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     setData(cvRaw)
    //   }, [])

    return (
        <div className="w-screen h-screen">
            <iframe className="w-full h-full" src="./CV_SWE.pdf"></iframe>
        </div>
    )
}

export default Cv;