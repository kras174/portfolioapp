import { useState, useEffect } from "react";

const CreateForm = (props) => {
  const defaultData = {
    title: "",
    description: "",
    releaseYear: "",
    image: "",
    preview: "",
  };
  const fromData = props.initialData ? { ...props.initialData } : defaultData;

  const [form, setForm] = useState(fromData);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    setForm({
      ...form,
      [name]: target.value,
    });
  };

  const handleStackChange = (event) => {
    const { options } = event.target;
    const optionsLength = options.length;
    let value = [];

    for (let i = 0; i < optionsLength; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }

    setForm({
      ...form,
      stack: value,
    });
  };

  const submitForm = () => {
    props.handleSaveForm({ ...form });
  };
  // TODO: не подсвечиваются селекты, при редактировании проекта
  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Название</label>
        <input
          onChange={handleChange}
          value={form.title}
          name="title"
          type="text"
          className="form-control"
          id="name"
          aria-describedby="emailHelp"
          placeholder="Суперпроект"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Описание</label>
        <input
          onChange={handleChange}
          value={form.description}
          name="description"
          type="text"
          className="form-control"
          id="description"
          placeholder="Опиши кратко"
        />
      </div>
      <div className="form-group">
        <label htmlFor="releaseYear">Год создания</label>
        <input
          onChange={handleChange}
          value={form.releaseYear}
          name="releaseYear"
          type="number"
          className="form-control"
          id="releaseYear"
          placeholder="Например 2020"
        />
        <small id="emailHelp" className="form-text text-muted">
          Max: 5, Min: 0{" "}
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Обложка</label>
        <input
          onChange={handleChange}
          value={form.image}
          name="image"
          type="text"
          className="form-control"
          id="image"
          placeholder="http://....."
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Скриншоты</label>
        <input
          onChange={handleChange}
          value={form.preview}
          name="preview"
          type="text"
          className="form-control"
          id="cover"
          placeholder="http://......"
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Стэк</label>
        <select
          onChange={handleStackChange}
          multiple
          className="form-control"
          id="genre"
        >
          <option>React</option>
          <option>Wordpress</option>
          <option>Bitrix</option>
          <option>HTML</option>
        </select>
      </div>
      <button
        onClick={submitForm}
        type="button"
        className="btn btn-outline-primary mb-2"
      >
        {props.submitButtonText || `Создать`}
      </button>
    </form>
  );
};

export default CreateForm;
