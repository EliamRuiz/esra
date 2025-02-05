// import cvRaw from "../src/cv.json"


const Cv = () => {

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     setData(cvRaw)
    //   }, [])

    return (
        <div className="h-full vh-100">
            <iframe className="aspect-auto" src="./CV_SWE.pdf" style={{ color: "red", fontSize: "20px" }}></iframe>
        </div>
    )
}

export default Cv;