import React from "react";
import { Checkbox } from "antd";
import "./pictureSelect.css"


const PictureSelect = (props) => {
    const onCheckAllChange = () => {
        if (props.pictures.length === props.value.length) {
            props.onChange([])
        } else {
            props.onChange(props.pictures.map(picture => (picture.id)))
        }
    }
    const indeterminate = props.value.length && props.pictures.length !== props.value.length;
    const checked = props.pictures.length === props.value.length;
    const selectedLen = props.value.length
    return (
        <div className="pictureSelectWrapper">
            <Checkbox
                indeterminate={indeterminate}
                checked={checked}
                onChange={onCheckAllChange}
            >已勾选{selectedLen}个</Checkbox>
            <Checkbox.Group className='contentList' onChange={props.onChange} value={props.value}>
                {
                    props.pictures.map(picture => {
                        return (
                            <div className="item" key={picture.id}>
                                <Checkbox className="checkbox" value={picture.id}></Checkbox>
                                <img src={picture.url} alt={picture.name}></img>
                            </div>
                        )
                    })
                }
            </Checkbox.Group>
        </div>
    )
}

export default PictureSelect