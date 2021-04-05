import React, { useEffect, useState }  from "react";
import { EntryCard } from "./EntryCard";
import { getAllEntries } from "../../modules/appManager"


export const EntryList = () => {

    const [entries, setEntries] = useState([]);

    const getEntries = () => {
        return getAllEntries().then(entriesFromAPI => {
            setEntries(entriesFromAPI)
        })
    }

    useEffect(() => {
        getEntries();
    }, []);

    return (
        <div className="entryCards">
            {entries.map(entry => <EntryCard key={entry.id} entry={entry} />)}
        </div>
    )
}