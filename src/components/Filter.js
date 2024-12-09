import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const Filter = ({ handleFilter }) => {
  const [filter, setFilter] = useState({ title: "", rating: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    handleFilter({ ...filter, [name]: value });
  };

  return (
    <Form className="d-flex justify-content-between mb-4">
      <FormControl
        type="text"
        placeholder="Search by title"
        name="title"
        value={filter.title}
        onChange={handleChange}
      />
      <FormControl
        type="number"
        placeholder="Filter by rating"
        name="rating"
        value={filter.rating}
        onChange={handleChange}
      />
      <Button variant="primary" onClick={() => handleFilter(filter)}>
        Filter
      </Button>
    </Form>
  );
};

export default Filter;
