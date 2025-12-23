/** 폼 템플릿 
 * shopmember 회원 */

import { GradeSelect } from './GradeSelect';

export const ShopMemberForm = ({
    form,
    onChange,
    onSubmit,
    submitText = '저장',
    disableCustno = false
}) => {
    
    return (
        <form onSubmit={onSubmit} >
            <div>
                <label>
                    회원번호:
                    <input
                        type="number"
                        name="custno"
                        value={form.custno}
                        onChange={onChange}
                        disabled={disableCustno}
                        required
                    />
                </label>
            </div>

            <div>
                <label>
                    이  름:
                    <input
                        type="text"
                        name="custname"
                        value={form.custname}
                        onChange={onChange}
                        maxLength={20}
                        required
                    />
                </label>
            </div>

            <div>
                <label>
                    전  화:
                    <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        maxLength={13}
                        placeholder="010-1234-5678"
                    />
                </label>
            </div>

            <div>
                <label>
                    주  소:
                    <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={onChange}
                        maxLength={60}
                    />
                </label>
            </div>

            <div>
                <label>
                    가입일:
                    <input
                        type="date"
                        name="joindate"
                        value={form.joindate}
                        onChange={onChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    등  급:
                    <GradeSelect value={form.grade} onChange={onChange} />
                </label>
            </div>

            <div>
                <label>
                    도  시:
                    <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={onChange}
                        maxLength={2}
                        placeholder="예:01"
                    />
                </label>
            </div>

            <button type="submit">{submitText}</button>
        </form>
    );
};

