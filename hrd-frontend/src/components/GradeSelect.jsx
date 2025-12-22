import React from 'react';
import { gradeOptions, codeToName } from './gradeUtils';

export const GradeSelect = ({ value, onChange, name = 'grade' }) => {
    const handleChange = (e) => {
        const val = e.target.value || '';
        onChange && onChange({ target: { name, value: val } });
    };

    return (
        <select name={name} value={value ?? ''} onChange={handleChange}>
            <option value="">선택</option>
            {gradeOptions().map(opt => (
                <option key={opt.code} value={opt.code}>
                    {opt.name}
                </option>
            ))}
        </select>
    );
};

export default GradeSelect;
