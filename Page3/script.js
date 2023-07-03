// script.js (Updated JavaScript code)
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const location = document.getElementById("location").value;
    const jobRole = document.getElementById("jobRole").value;
    // Add your search logic here (e.g., send search request to backend)
    // Dummy code to simulate fetching candidates
    const fetchedCandidates = fetchCandidates(location, jobRole);
    displayCandidates(fetchedCandidates);
});

function fetchCandidates(location, jobRole) {
    // Replace with your backend API call to fetch candidates based on location and job role
    // Return a dummy list of candidates for demonstration
    return [
        { name: "Candidate 1", location: "City A", role: "Job Role X" },
        { name: "Candidate 2", location: "City B", role: "Job Role Y" },
        { name: "Candidate 3", location: "City C", role: "Job Role X" },
        { name: "Candidate 4", location: "City A", role: "Job Role Z" },
    ];
}

function displayCandidates(candidates) {
    const candidatesList = document.getElementById("candidatesList");
    candidatesList.innerHTML = ""; // Clear previous list

    candidates.forEach((candidate) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Name: ${candidate.name}, Location: ${candidate.location}, Role: ${candidate.role}`;
        candidatesList.appendChild(listItem);
    });
}
