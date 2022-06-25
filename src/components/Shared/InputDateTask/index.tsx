import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  name: string
}

export const InputDateTask: React.FC<Props> = ({ name }) => {
  // const [startDate, setStartDate] = useState<Date>(new Date());
  const { control, formState: { errors } } = useFormContext();
  const RangePicker: any  = DatePicker;

  return (
    <Controller
      name = {name}
      defaultValue = {null}
      control = {control}
      render = {({ field, fieldState, formState }) => (
        <RangePicker
          placeholderText = 'Select date'
          onChange = {(date: Date) => field.onChange(date)}
          selected = {field.value}
          showDisabledMonthNavigation
          shouldCloseOnSelect
          dropdownMode="select"
          minDate = {new Date()}
        />
      )}
    />
  )
}