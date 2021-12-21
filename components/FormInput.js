import React, { useEffect, useState } from "react";
import { sbEditable } from "@storyblok/storyblok-editable";
import styles from "../styles/form.module.scss";
import Storyblok, { useStoryblok } from "../lib/storyblok";
import Select from "react-select";

const FormInput = ({ blok, value, fieldChanged }) => {
  const [selectOptions, setSelectOptions] = useState([]);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      opacity: 0.9,
      minHeight: 60,
      borderRadius: 0,
    }),

    dropdownIndicator: (base) => ({
      ...base,
      padding: 4,
    }),
    clearIndicator: (base) => ({
      ...base,
      padding: 8,
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "0px 6px",
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  };

  const fetchData = async () => {
    let options = [];
    let { data } = await Storyblok.get(`cdn/stories/`);

    Object.keys(data.stories).forEach((story) => {
      if (
        data.stories[story].slug === "home" ||
        data.stories[story].slug === "config" ||
        data.stories[story].id === 91221945 ||
        data.stories[story].id === 85266704 ||
        data.stories[story].id === 89204416
      ) {
        return;
      } else {
        options.push(data.stories[story]);
      }

      if (options.length) {
        setSelectOptions(options);
      }
    });
  };
  useEffect(() => {
    if (blok.type == "select") {
      fetchData();
    }
  }, [blok.type]);

  return (
    <div {...sbEditable(blok)} className={styles.formField}>
      {blok.label !== "" ? (
        <label htmlFor={blok._uid}>{blok.label}</label>
      ) : null}
      {blok.type == "textarea" ? (
        <textarea
          id={blok._uid}
          name={blok.name}
          value={value}
          placeholder={blok.placeholder}
          onChange={(e) => fieldChanged(blok.name, e.target.value)}
        />
      ) : blok.type == "select" ? (
        <Select
          options={selectOptions}
          value={value}
          id={blok._uid}
          name={blok.name}
          placeholder={blok.placeholder}
          closeMenuOnSelect
          onChange={(e) => fieldChanged(blok.name, e)}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.name}
          isClearable
          menuPortalTarget={process.browser && document.body}
          styles={customStyles}
        />
      ) : (
        <input
          type={blok.type}
          id={blok._uid}
          name={blok.name}
          value={value}
          placeholder={blok.placeholder}
          onChange={(e) => fieldChanged(blok.name, e.target.value)}
        />
      )}
    </div>
  );
};

export default FormInput;
