const dummyLocations = require("../locations.json")

const fetchLocations = (req, res) => {
    try {
        const { page=1, minScore, search, maxScore, sortBy, limit = 100 } = req.query
        const skip = (page - 1) * limit;
        let locations = [...dummyLocations]

        if (search) {
            locations = locations.filter((location)=> `${location.name} ${location.address} ${location.country}`?.toLowerCase()?.includes(search?.toLowerCase()))
        }

        if (minScore && maxScore) {
            locations = locations.filter((location)=> Number(location.score) > Number(minScore) && Number(location.score) < Number(maxScore))
        }
        if (sortBy === "score") {
            locations = locations.sort((a, b) => Number(b.score) - Number(a.score))
        } else if (sortBy === "name") {
            locations = locations.sort((a, b) => a.name?.localeCompare(b.name))
        }
        const totalLocation = locations.length
        const totalPages = Math.ceil(totalLocation / limit)

        
        locations = locations.slice(skip, dummyLocations.length).slice(0, limit)
        
        res.status(200).json({ locations, totalLocation, totalPages, currentPage: page });
    } catch (error) {
        res.status(500).json({message: "Interval server error"})
    }
}

module.exports = {fetchLocations}