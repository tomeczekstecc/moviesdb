const Spinner = () =>
    <div>
        <div className="spinner-border text-primary" role="status">
            <svg className="spinner-grow" width="3em" height="3em" viewBox="0 0 16 16"
                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                      d="M8 1a7 7 0 0 1 7 7v1.5a.5.5 0 0 1-1 0V8a6 6 0 0 0-6-6 5.998 5.998 0 0 0-5.657 4H1.5a.5.5 0 0 1 0-1h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1A7 7 0 0 1 8 1z"/>
                <path fillRule="evenodd"
                      d="M8 15a7 7 0 0 1-7-7v-1.5a.5.5 0 0 1 1 0V8a6 6 0 0 0 6 6 5.998 5.998 0 0 0 5.657-4H14.5a.5.5 0 0 1 0 1h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a7 7 0 0 1-7 1z"/>
            </svg>
        </div>
    </div>;

export default Spinner;
