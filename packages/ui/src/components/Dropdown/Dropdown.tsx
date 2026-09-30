import {useState,useRef,useEffect,forwardRef,} from 'react';
import type { DropdownProps,DropdownItemData } from './Dropdown.types';
import {
    DropdownWrapper,
    DropdownButton,
    DropdownMenu,
    DropdownItem,
    DropdownLink,
    SubmenuContainer,
    SubmenuMenu,} from './Dropdown.styles';
  
  export const Dropdown = ({
    label,
    items,
  }: DropdownProps) => {

    const [open, setOpen] = useState(false);
    const [submenuId, setSubmenuId] = useState<string | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
          }
        };
        document.addEventListener('mousedown',handleClickOutside);
        return () => {
        document.removeEventListener('mousedown',handleClickOutside);
        };
      }, []);
  
    const renderItem = (
      item: DropdownItemData
    ) => {
      if (item.children?.length) {
        return (
          <SubmenuContainer
            key={item.id}
            onMouseEnter={() =>
              setSubmenuId(item.id)
            }
            onMouseLeave={() =>
              setSubmenuId(null)
            }
          >
            <DropdownItem>
              {item.label}
            </DropdownItem>
  
            {submenuId === item.id && (
              <SubmenuMenu>
                {item.children.map(
                  (child) => (
                    <DropdownItem
                      key={child.id}
                      onClick={
                        child.onClick
                      }
                    >
                      {child.label}
                    </DropdownItem>
                  )
                )}
              </SubmenuMenu>
            )}
          </SubmenuContainer>
        );
      }
  
      if (item.href) {
        return (
          <DropdownLink
            key={item.id}
            href={item.href}
          >
            {item.label}
          </DropdownLink>
        );
      }
  
      return (
        <DropdownItem
          key={item.id}
          $disabled={
            item.disabled
          }
          disabled={
            item.disabled
          }
          onClick={item.onClick}
        >
          {item.label}
        </DropdownItem>
      );
    };
  
    return (
      <DropdownWrapper ref={dropdownRef}>
        <DropdownButton
          type="button"
          onClick={() =>
            setOpen(!open)
          }
        >
          {label}
        </DropdownButton>
  
        {open && (
          <DropdownMenu>
            {items.map(renderItem)}
          </DropdownMenu>
        )}
      </DropdownWrapper>
    );
  };