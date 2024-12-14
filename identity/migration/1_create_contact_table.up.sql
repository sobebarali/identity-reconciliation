CREATE TABLE Contact (
  id SERIAL PRIMARY KEY,
  phoneNumber VARCHAR(20),
  email VARCHAR(255),
  linkedId INTEGER REFERENCES Contact(id),
  linkPrecedence VARCHAR(10) CHECK (linkPrecedence IN ('primary', 'secondary')),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deletedAt TIMESTAMP
);