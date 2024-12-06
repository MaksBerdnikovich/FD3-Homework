export const filterParams = (movies, type) => {
    const items = movies.map(movie => movie[type])

    return items.reduce((acc, arr) => {
        arr.forEach(item => {
            if (!acc.includes(item)) acc.push(item)
        });

        return acc;
    }, []);
}

export const filterQuery = (query, params, str = true) => {
    const combineParams = [query, params].reduce((accumulator, current) => {
        return { ...accumulator, ...current }
    }, {})

    for (const key in combineParams) {
        if (combineParams[key] === '' ) delete combineParams[key]
    }

    const searchParams = new URLSearchParams(combineParams).toString()

    return str ? `?${searchParams}` : combineParams
}

export const highlightMatch = (text, filter) => {
    if (!filter) return text;

    const regex = new RegExp(`(${filter})`, 'gi');

    return text.split(regex).map((substring, i) => {
        if (substring.toLowerCase() === filter.toLowerCase()) {
            return (
                <span key={i} className="highlight">
                    {substring}
                </span>
            );
        }
        return substring;
    });
};