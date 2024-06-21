CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    specialization TEXT
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    date_of_birth DATE
);

CREATE TABLE diseases (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER REFERENCES doctors(id),
    patient_id INTEGER REFERENCES patients(id),
    visit_date DATE NOT NULL
);

CREATE TABLE diagnoses (
    id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits(id),
    disease_id INTEGER REFERENCES diseases(id)
);
