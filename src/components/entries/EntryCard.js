import React from 'react';

export const EntryCard = ({ entry }) => (
        //* This is the old JournalEntryComponent
        // <section id="entry__${entry.id}" class="journalEntry">
        //     <h4>Topic: ${entry.concept}</h4>
        //     <p>Date of Entry: ${entry.date}</p>
        //     <p>${entry.entry}</p>
        //     <p>${entry.mood}</p>
        //     <button id="delete__${entry.id}">Delete</button>
        //     <button id="edit__${entry.id}">Edit</button>
        // </section>

        <section className="journalEntry">
            <h4>Topic: {entry.concept}</h4>
            <p>Date of Entry: {entry.date}</p>
            <p>{entry.entry}</p>
            <p>Mood: {entry.mood}</p>
            <button>Delete</button>
            <button>Edit</button>
        </section>
)