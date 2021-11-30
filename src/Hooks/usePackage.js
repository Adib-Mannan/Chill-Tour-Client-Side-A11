import { useEffect, useState } from "react";


const usePackage = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://protected-mountain-05899.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])
    return { packages }

}

export default usePackage;