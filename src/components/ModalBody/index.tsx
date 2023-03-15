import closeIcon from '../../assets/images/close-icon.svg';
import PrimaryButton from '../PrimaryButton';
import SecondaryButton from '../SecondaryButton';

import { Overlay, BodyContainer, Actions } from './styles';

interface ModalBodyProps {
  children: React.ReactNode
  title: string
  titleIconPath?: string
  onclose: () => void
  primaryAction?: {
    label: string,
    onClick: () => void,
    disableCondition?: boolean
  }
  secondaryAction?: {
    label: string,
    onClick: () => void,
    disableCondition?: boolean
  }
}

export default function ModalBody({
  children, title, titleIconPath, onclose, primaryAction, secondaryAction,
}: ModalBodyProps) {
  return (
    <Overlay>
      <BodyContainer>
        <div className="modal-header">
          {titleIconPath ? (
            <div className="title-group">
              <img src={titleIconPath} />
              <strong>{title}</strong>
            </div>
          ) : (
            <strong>{title}</strong>
          )}

          <button type="button" onClick={onclose}>
            <img src={closeIcon} />
          </button>
        </div>

        {children}

        <Actions>
          <div className="secondary-button-container">
            {secondaryAction && (
              <SecondaryButton
                onClick={secondaryAction.onClick}
                isDisable={secondaryAction.disableCondition}
              >
                {secondaryAction.label}
              </SecondaryButton>
            )}
          </div>

          <div className="primary-button-container">
            {primaryAction && (
              <PrimaryButton
                onClick={primaryAction.onClick}
                isDisabled={primaryAction.disableCondition}
              >
                {primaryAction.label}
              </PrimaryButton>
            )}
          </div>
        </Actions>
      </BodyContainer>
    </Overlay>
  );
}
