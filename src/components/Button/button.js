import 'App.css';
export default function Button({ onloadMore }) {
   
    return (
        <button
            type="button"
            className="Button"
            onClick={onloadMore}
        >
            Load more
        </button>
    )
    }
