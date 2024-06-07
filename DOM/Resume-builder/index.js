let educationCount = 0;
let experienceCount = 0;
let researchCount = 0;
function updatePreview(section, event, id) {
    const value = event.target.value;
    let previewElement = document.getElementById(`${id}-${section}`);

    // Dynamically add heading and horizontal line for educational, experience, and research sections
    if (section === 'school' || section === 'degree') {
        const educationHeading = document.getElementById('preview-education-heading');
        if (!educationHeading) {
            const heading = document.createElement('h2');
            heading.id = 'preview-education-heading';
            heading.textContent = 'Educational Information';
            const hrContent = document.createElement('hr');
            document.getElementById('preview').appendChild(hrContent);
            document.getElementById('preview').appendChild(heading);
        }
    } else if (section === 'company' || section === 'role') {
        const experienceHeading = document.getElementById('preview-experience-heading');
        if (!experienceHeading) {
            const heading = document.createElement('h2');
            heading.id = 'preview-experience-heading';
            heading.textContent = 'Experience';
            const hrContent = document.createElement('hr');
            document.getElementById('preview').appendChild(hrContent);
            document.getElementById('preview').appendChild(heading);
        }
    } else if (section === 'researchTitle' || section === 'researchDescription') {
        const researchHeading = document.getElementById('preview-research-heading');
        if (!researchHeading) {
            const heading = document.createElement('h2');
            heading.id = 'preview-research-heading';
            heading.textContent = 'Research and Publications';
            const hrContent = document.createElement('hr');
            document.getElementById('preview').appendChild(hrContent);
            document.getElementById('preview').appendChild(heading);
        }
    }

    if (!previewElement) {
        previewElement = document.createElement('p');
        previewElement.id = `${id}-${section}`;
        document.getElementById('preview').appendChild(previewElement);
    }

    if (previewElement) {
        // Apply different styles to name and title elements
        if (section === 'name') {
            previewElement.innerHTML = `<strong>${value}</strong>`;
        } else if (section === 'title') {
            previewElement.innerHTML = `<em>${value}</em>`;
        }
        else if(section === 'email')
            {
                previewElement.innerHTML = `<small><a href="mailto:${value}">${value}</a></small>`;
            }
        else if(section === 'school')
            {
                previewElement.innerHTML = `${value}`;
            }
        else if(section === 'degree')
            {
                previewElement.innerHTML = `<small><strong>${value} </strong></small>`;
            }
        else {
            previewElement.textContent = value;
        }
    }
}



function addSection(sectionId) {
    const section = document.getElementById(sectionId);
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';

    let newSectionId = '';

    // Add <hr> before starting a new section
    const hrElement = document.createElement('hr');
    section.appendChild(hrElement);

    if (sectionId === 'personal-info') {
        inputGroup.innerHTML = `
            <input type="text" placeholder="Name" name="name" oninput="updatePreview('name', event, 'personal')">
            <input type="text" placeholder="Title" name="title" oninput="updatePreview('title', event, 'personal')">
            <input type="email" placeholder="Email" name="email" oninput="updatePreview('email', event, 'personal')">
        `;
    } else if (sectionId === 'education-info') {
        educationCount++;
        newSectionId = `education-${educationCount}`;
        inputGroup.innerHTML = `
            <input type="text" placeholder="School" name="school" oninput="updatePreview('school', event, '${newSectionId}')">
            <input type="text" placeholder="Degree" name="degree" oninput="updatePreview('degree', event, '${newSectionId}')">
        `;
    } else if (sectionId === 'experience-info') {
        experienceCount++;
        newSectionId = `experience-${experienceCount}`;
        inputGroup.innerHTML = `
            <input type="text" placeholder="Company" name="company" oninput="updatePreview('company', event, '${newSectionId}')">
            <input type="text" placeholder="Role" name="role" oninput="updatePreview('role', event, '${newSectionId}')">
        `;
    } else if (sectionId === 'research-info') {
        researchCount++;
        newSectionId = `research-${researchCount}`;
        inputGroup.innerHTML = `
            <input type="text" placeholder="Title" name="researchTitle" oninput="updatePreview('researchTitle', event, '${newSectionId}')">
            <input type="text" placeholder="Description" name="researchDescription" oninput="updatePreview('researchDescription', event, '${newSectionId}')">
        `;
    }

    section.appendChild(inputGroup);

}




