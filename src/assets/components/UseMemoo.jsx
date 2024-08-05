import { useMemo, useState } from "react";

export default function FilteredItems() {
    const [searchi, setSearch] = useState("");
    const items = Array.from({length:10}, (_, index)=> `Item ${index +1}`)

    const filterWithMemo = useMemo(() => {
        console.log("Filtering items ...");
        return items.filter((e) => e.toLowerCase().includes(searchi.toLowerCase()));
    }, [searchi]);

    const increasee= (num)=>{
        return (num+1);
    }

    return (
        <>
            <h1>UseMemo</h1>
            <div className="container"></div>
            <div className="input-group flex-nowrap">
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setSearch(e.target.value)}
                    value={searchi}
                    placeholder="search"
                    
                    
                />
            </div>

            <div>
                {filterWithMemo.map((item, i) => (
                    <div key={i}>{item}</div>
                ))}
            </div>

            <div>
                <h4>0</h4>
            <button className="btn btn-primary" onClick={increasee}> + </button>
            <button className="btn btn-primary"> - </button>
            </div>
        </>
    );
}
