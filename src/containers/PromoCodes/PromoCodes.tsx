import { useState } from 'react';
import { promoCodes } from '../../constants/promoCodes';
import { useDispatch } from 'react-redux';
import { PromoCodeInterface } from '../../types';
import { InputContainer, PromoInput, ApplyButton, PromoListItem } from '../../view';

const PromoCodes = (props: {}) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedPromo, setSelectedPromo] = useState<PromoCodeInterface | null>(null);

  const dispatch = useDispatch();

  const applyPromoCode = () => {
    if (promoCodes.hasOwnProperty(inputValue)) {
      setSelectedPromo(promoCodes[inputValue]);
      setInputValue('');
      dispatch({ type: 'APPLY_COUPON_CODE', payload: inputValue })
    } else {
      alert('Invalid');
    }
  };

  const render = <div>
  <InputContainer>
    <PromoInput
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Enter promo code"
    />
    <ApplyButton onClick={applyPromoCode}>Apply</ApplyButton>
  </InputContainer>
  {selectedPromo && (
    <PromoListItem>
      <strong>{selectedPromo.Code}</strong>: {selectedPromo.Description}
    </PromoListItem>
  )}
</div>

  return render;
};

export default PromoCodes;
