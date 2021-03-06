import { FormioTemplate } from '../formio.template';
import { TextField } from './textfield/textfield';
import { ButtonField } from './button/button';
import { ColumnsField } from './columns/columns';
import { ContainerField } from './container/container';
import { EmailField } from './email/email';
import { CheckBoxField } from './checkbox/checkbox';
import { DataGrid } from './datagrid/datagrid';
import { TextAreaField } from './textarea/textarea';
import { PasswordField } from './password/password';
import { NumberField } from './number/number';
import { HiddenField } from './hidden/hidden';
import { RadioField } from './radio/radio';
import { CustomField } from './custom/custom';
import { TableField } from './table/table';
import { PanelField } from './panel/panel';
import { FieldSetField } from './fieldset/fieldset';
import { WellField } from './well/well';
import { DateTimeField } from './datetime/datetime';
import { CurrencyField } from './currency/currency';
import { SelectBoxField } from './selectboxes/selectboxes';
import { ContentField } from './content/content';
import { HtmlField } from './html/html';
import { SelectField } from './select/select';
import { SurveyField } from './survey/survey';
import { ResourceField } from './resource/resource';
import { AddressField } from './address/address';
import { PhoneNumberField } from './phonenumber/phonenumber';
import { SignatureField } from './signature/signature';
export function RegisterComponents(template: FormioTemplate) {
    TextField(template);
    ButtonField(template);
    ColumnsField(template);
    ContainerField(template);
    DataGrid(template);
    EmailField(template);
    TextAreaField(template);
    HiddenField(template);
    PasswordField(template);
    NumberField(template);
    RadioField(template);
    CheckBoxField(template);
    CustomField(template);
    TableField(template);
    PanelField(template);
    FieldSetField(template);
    WellField(template);
    DateTimeField(template);
    CurrencyField(template);
    SelectBoxField(template);
    ContentField(template);
    HtmlField(template);
    SelectField(template);
    SurveyField(template);
    ResourceField(template);
    AddressField(template);
    PhoneNumberField(template);
    SignatureField(template);
}
