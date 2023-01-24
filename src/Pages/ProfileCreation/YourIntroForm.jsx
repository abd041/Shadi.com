/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react'
import "./ProfileCreation.css"
import {
    FormGroup,
    FormControlLabel,
    InputLabel,
    Checkbox,
    TextField,
    Stack,
    Radio,
    RadioGroup,
    FormLabel,
    FormHelperText,
    Button,
    ListSubheader,
    MenuItem,
    styled,
    Typography,
    Switch,
} from "@mui/material";
import { FormControl, Paper, Select } from "@material-ui/core";
import { Form, Label, Input } from 'reactstrap'
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import AllCountryCodes from "../../assets/init/AllCountryCodes"

const YourIntroForm = (props) => {

    const introDefault_ = (
        <>
            <p>Here are a few things you may need to know about me.</p>
            <p>My mind is creatively inclined with a deep artistic sense. I am looking for someone who will accept me the way I am and be supportive to me in the journey of life. Thank you for expressing interest in my profile.
                My mind is creatively inclined with a deep artistic sense. I am looking for someone who will accept me the way I am and be supportive to me in the journey of life. Thank you for expressing interest in my profile.</p>
        </>
    )

    const introDefault = `Allow me a self-introduction.
    I firmly believe honesty to be a man's greatest virtue. I am looking for a loving and caring partner who will walk hand-in-hand with me in every phase of life. If the above strikes the chord, please feel free to connect.`;

    const yourIntroInialization = {
        intro_about_yourself: introDefault,
        phone_country_code: "",
        phone_no: "",
    }
    const [YourIntroFormData, SetYourIntroFormData] = useState(yourIntroInialization);
    const { intro_about_yourself, phone_country_code, phone_no, } = YourIntroFormData;


    const [textareaLimit, setTextareaLimit] = useState(4000)
    const [content, setContent] = useState(introDefault);
    const setFormattedContent = useCallback(
        text => {
            setContent(text + "")
        },
        [setContent]
    );

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target
        if (type == "checkbox") {
            SetYourIntroFormData({
                ...YourIntroFormData,
                [name]: checked
            })
        } else {
            SetYourIntroFormData({
                ...YourIntroFormData,
                [name]: value
            })
        }
    };

    const onSubmit = (data) => {
        console.log(data)

        props.nextTab();
    };

    return (
        <>
            <ValidatorForm useRef="form" onSubmit={onSubmit} onError={errors => console.log(errors)}>
                <div className="row-form">
                    <FormGroup>
                        <Label for="intro_about_yourself" style={content.length <= textareaLimit ? { color: 'var(--text-color)' } : { color: 'red' }}>About yourself</Label>
                        <Input
                            type="textarea"
                            className='intro_about_yourselt_textarea'
                            name="intro_about_yourself"
                            value={intro_about_yourself}
                            onChange={event => {
                                setFormattedContent(event.target.value)
                                handleChange(event)
                            }}
                        ></Input>
                        <div className='intro_about_yourselt_textarea_text_limit'>
                            <p className='text_help' style={content.length <= textareaLimit ? { color: 'var(--text-color-dark)' } : { color: 'red' }}>
                                {
                                    content.length <= textareaLimit ?
                                        "Edit the suggested text above👆 to add a personal touch"
                                        : `You can write maximum of only ${textareaLimit} characters`
                                }
                            </p>
                            <p className='text_limit ms-1'>
                                <span className='curr_characters' style={content.length <= textareaLimit ? { color: 'blue' } : { color: 'red' }}>{content.length}</span>
                                <span className='total_characters'>{`( ${textareaLimit} max )`}</span>
                            </p>
                        </div>
                    </FormGroup>
                    <FormControl margin="normal" fullWidth>
                        <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                            <SelectValidator
                                label="Your Mobile No."
                                name="phone_country_code"
                                value={phone_country_code ? phone_country_code : ""}
                                onChange={handleChange}
                                // validators={['required']}
                                // errorMessages={['Mobile No is Required.']}
                                // variant="standard"
                                style={{minWidth: 100, width: '30% !important'}}
                            >
                                {
                                    AllCountryCodes.map((option) => (
                                        <MenuItem value={option.code} style={{ height: 25, fontSize: 13 }}>{option.country} {"(+" + option.code + ")"}</MenuItem>
                                    ))
                                }
                            </SelectValidator>
                            <TextValidator
                                label="Enter Phone Number"
                                className='intro_phone_no_box ms-2'
                                name="phone_no"
                                type="number"
                                value={phone_no}
                                onChange={handleChange}
                                // validators={['required']}
                                // errorMessages={['Phone Number is Required.']}
                                // variant="standard"
                                style={{marginTop: 2, width: '70% !important'}}
                            />
                        </div>
                    </FormControl>
                </div>
                <div className="next_button_panel mt-3">
                    <Button type='submit' className='btn_next'>
                        {"Create Profile"}
                    </Button>
                </div>
            </ValidatorForm>
        </>
    )
}

export default YourIntroForm