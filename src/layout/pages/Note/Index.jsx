import React from 'react';
import { useNavigate } from "react-router-dom";

const Note = () => {

    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/details');
        navigate('/Login');
        navigate('/Register');
        navigate('/Expense');
    };

    return (
        <>
        
            <div>
                <header className="o_navbar">
                    <nav className="o_main_navbar d-print-none" data-command-category="disabled">
                        <a href="/odoo" className="o_menu_toggle hasImage" accessKey="h" title="Home menu"
                            aria-label="Home menu">
                            <svg xmlns="http://www.w3.org/2000/svg" className="o_menu_toggle_icon pe-none"
                                width="14px" height="14px" viewBox="0 0 14 14">
                                <g xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="o_menu_toggle_row_0">
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={0} y={0}
                                    />
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={5} y={0}
                                    />
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={10} y={0}
                                    />
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="o_menu_toggle_row_1">
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={0} y={5}
                                    />
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={5} y={5}
                                    />
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={10} y={5}
                                    />
                                </g>
                                <g xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="o_menu_toggle_row_2">
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={0} y={10}
                                    />
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={5} y={10}
                                    />
                                    <rect xmlns="http://www.w3.org/2000/svg" width={3} height={3} x={10} y={10}
                                    />
                                </g>
                            </svg>
                            <img className="o_menu_brand_icon d-inline position-absolute start-0 h-100 ps-1 ms-2"
                                src="data:image/png;base64,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"
                                alt="Expenses" />
                            <span className="o_menu_brand d-flex ms-3 pe-0">
                                Expenses
                            </span>
                        </a>
                        <div className="o_menu_sections d-flex flex-grow-1 flex-shrink-1 w-0"
                            role="menu">
                            <button className="fw-normal o-dropdown dropdown-toggle dropdown" data-hotkey={1}
                                data-menu-xmlid="hr_expense.menu_hr_expense_my_expenses" aria-expanded="false">
                                <span data-section={220}>
                                    My Expenses
                                </span>
                            </button>
                            <a className="o-dropdown-item dropdown-item o-navigable o_nav_entry" role="menuitem"
                                tabIndex={0} href="/odoo/expense-reports" data-hotkey={2} data-menu-xmlid="hr_expense.menu_hr_expense_report"
                                data-section={223}>
                                Expense Reports
                            </a>
                            <button className="fw-normal o-dropdown dropdown-toggle dropdown" data-hotkey={3}
                                data-menu-xmlid="hr_expense.menu_hr_expense_reports" aria-expanded="false">
                                <span data-section={224}>
                                    Reporting
                                </span>
                            </button>
                            <button className="fw-normal o-dropdown dropdown-toggle dropdown" data-hotkey={4}
                                data-menu-xmlid="hr_expense.menu_hr_expense_configuration" aria-expanded="false">
                                <span data-section={226}>
                                    Configuration
                                </span>
                            </button>
                        </div>
                        <div className="o_menu_systray d-flex flex-shrink-0 ms-auto" role="menu">
                            <div />
                            <div className="o_menu_systray_item d-md-flex ms-auto oe_expiration_tag rounded"
                                style={{ backgroundColor: '#dc3545', color: 'white' }}>
                                <a href="#" className="o_nav_entry">
                                    <label>
                                        <i className="fa fa-fw fa-bell" style={{ color: 'white' }} />
                                    </label>
                                    <span className="d-none d-sm-inline" style={{ color: 'white' }}>
                                        Pending Activation
                                    </span>
                                </a>
                            </div>
                            <div />
                            <div className="dropdown" />
                            <div />
                            <div />
                            <div className="o-mail-DiscussSystray-class">
                                <button aria-expanded="false" className="o-dropdown dropdown-toggle dropdown">
                                    <i className="fa fa-lg fa-comments" role="img" aria-label="Messages" />
                                    <span className="o-mail-MessagingMenu-counter badge rounded-pill">
                                        3
                                    </span>
                                </button>
                            </div>
                            <div />
                            <button aria-expanded="false" className="o-dropdown dropdown-toggle dropdown">
                                <i className="fa fa-lg fa-clock-o" role="img" aria-label="Activities"
                                />
                            </button>
                            <div />
                            <div className="o_switch_company_menu d-none d-md-block">
                                <button data-hotkey="shift+u" disabled title="none" aria-expanded="false"
                                    className="o-dropdown dropdown-toggle dropdown">
                                    <i className="fa fa-building d-lg-none" />
                                    <span className="oe_topbar_name d-none d-lg-block text-truncate">
                                        none
                                    </span>
                                </button>
                            </div>
                            <div />
                            <div className="d-flex" xmlSpace="preserve">
                                <button className="o_mobile_menu_toggle o_nav_entry o-no-caret d-md-none border-0 pe-3"
                                    title="Toggle menu" aria-label="Toggle menu">
                                    <i className="oi oi-panel-right" />
                                </button>
                            </div>
                            <div />
                            <div className="o_user_menu d-none d-md-block pe-0">
                                <button className="py-1 py-lg-0 o-dropdown dropdown-toggle dropdown" aria-expanded="false">
                                    <img className="o_avatar o_user_avatar rounded" alt="User" src="https://none321.odoo.com/web/image/res.partner/3/avatar_128?unique=1726708128000"
                                    />
                                    <small className="oe_topbar_name d-none ms-2 text-start smaller lh-1 text-truncate"
                                        style={{ maxWidth: 200 }}>
                                        Trần Quốc Thái
                                        <mark className="d-block font-monospace text-truncate">
                                            <i className="fa fa-database oi-small me-1" />
                                            none321
                                        </mark>
                                    </small>
                                </button>
                            </div>
                        </div>
                    </nav>
                </header>
                <div className="o_action_manager">
                    <div className="o_list_view o_hr_expense_dashboard_tree_view o_view_controller o_action">
                        <div className="o_control_panel d-flex flex-column gap-3 px-3 pt-2 pb-3"
                            data-command-category="actions">
                            <div className="o_control_panel_main d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-lg-start gap-3 flex-grow-1">
                                <div className="o_control_panel_breadcrumbs d-flex align-items-center gap-1 order-0 h-lg-100">
                                    <div className="o_control_panel_main_buttons d-flex gap-1 d-empty-none d-print-none">
                                        <div className="d-inline-flex gap-1">
                                            <button type="button" className="o_button_upload_expense btn btn-primary">
                                            <a href="/add" onclick="{handleNavigation}" style={{color:'white'}}>New expense</a>
                                    
                                            </button>
                                    
                                        </div>
                                    </div>
                                    <div className="o_breadcrumb d-flex gap-1 text-truncate">
                                       
                                        <div className="o_control_panel_breadcrumbs_actions d-inline-flex d-print-none">
                                            <div className="o_cp_action_menus d-flex align-items-center pe-2 gap-1">
                                                <div className="lh-1">
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="me-auto" />
                                </div>
                                <div className="o_control_panel_actions d-empty-none d-flex align-items-center justify-content-start justify-content-lg-around order-2 order-lg-1 w-100 w-lg-auto">
                                    <div className="o_cp_searchview d-flex input-group" role="search">
                                        <div className="o_searchview form-control d-print-contents d-flex align-items-center py-1 border-end-0"
                                            role="search" aria-autocomplete="list">
                                            <button className="d-print-none btn border-0 p-0" role="button" aria-label="Search..."
                                                title="Search...">
                                                <i className="o_searchview_icon oi oi-search me-2" role="img" />
                                            </button>
                                            <div className="o_searchview_input_container d-flex flex-grow-1 flex-wrap gap-1">
                                                <div className="o_searchview_facet position-relative d-inline-flex align-items-stretch rounded-2 bg-200 text-nowrap opacity-trigger-hover o_facet_with_domain"
                                                    role="listitem" aria-label="search" tabIndex={0}>
                                                    <div className="position-absolute start-0 top-0 bottom-0 end-0 bg-view border rounded-2 shadow opacity-0 opacity-100-hover"
                                                    />
                                                    <div className="o_searchview_facet_label position-relative rounded-start-2 px-1 rounded-end-0 p-0 btn btn-primary"
                                                        role="button">
                                                        <i className="small fa-fw fa fa-filter" role="image" />
                                                        <span className="position-absolute start-0 top-0 bottom-0 end-0 bg-inherit opacity-0 opacity-100-hover">
                                                            <i className="fa fa-fw fa-cog" />
                                                        </span>
                                                    </div>
                                                    <div className="o_facet_values position-relative d-flex flex-wrap align-items-center ps-2 rounded-end-2 text-wrap">
                                                        <small className="o_facet_value">
                                                            My Expenses
                                                        </small>
                                                        <button className="o_facet_remove oi oi-close btn btn-link py-0 px-2 text-danger d-print-none"
                                                            role="button" aria-label="Remove" title="Remove" />
                                                    </div>
                                                </div>
                                                <input type="text" className="o_searchview_input o_input d-print-none flex-grow-1 w-auto border-0"
                                                    accessKey="Q" placeholder="Search..." role="searchbox" />
                                            </div>
                                        </div>
                                        <button className="o_searchview_dropdown_toggler d-print-none btn btn-outline-secondary o-dropdown-caret rounded-start-0 o-dropdown dropdown-toggle dropdown"
                                            data-hotkey="shift+q" title="Toggle Search Panel" aria-expanded="false"
                                        />
                                    </div>
                                </div>
                                <div className="o_control_panel_navigation d-flex flex-wrap flex-md-nowrap justify-content-end gap-1 gap-xl-3 order-1 order-lg-2 flex-grow-1">
                                    <div className="o_cp_pager text-nowrap " role="search">
                                        <nav className="o_pager d-flex gap-2 h-100" aria-label="Pager">
                                            <span className="o_pager_counter align-self-center">
                                                <span className="o_pager_value d-inline-block border-bottom border-transparent mb-n1">
                                                    1-3
                                                </span>
                                                <span>
                                                    /
                                                </span>
                                                <span className="o_pager_limit">
                                                    3
                                                </span>
                                            </span>
                                            <span className="btn-group d-print-none" aria-atomic="true">
                                                <button type="button" className="oi oi-chevron-left btn btn-secondary o_pager_previous px-2 rounded-start"
                                                    aria-label="Previous" data-tooltip="Previous" tabIndex={-1} data-hotkey="p"
                                                    disabled />
                                                <button type="button" className="oi oi-chevron-right btn btn-secondary o_pager_next px-2 rounded-end"
                                                    aria-label="Next" data-tooltip="Next" tabIndex={-1} data-hotkey="n" disabled
                                                />
                                            </span>
                                        </nav>
                                    </div>
                                    <nav className="o_cp_switch_buttons d-print-none d-inline-flex btn-group">
                                        <button className="btn btn-secondary o_switch_view o_list active" data-tooltip="List">
                                            <i className="oi oi-view-list" />
                                        </button>
                                        <button className="btn btn-secondary o_switch_view o_kanban" data-tooltip="Kanban">
                                            <i className="oi oi-view-kanban" />
                                        </button>
                                        <button className="btn btn-secondary o_switch_view o_graph" data-tooltip="Graph">
                                            <i className="fa fa-area-chart" />
                                        </button>
                                        <button className="btn btn-secondary o_switch_view o_pivot" data-tooltip="Pivot">
                                            <i className="oi oi-view-pivot" />
                                        </button>
                                        <button className="btn btn-secondary o_switch_view o_activity" data-tooltip="Activity">
                                            <i className="fa fa-clock-o" />
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="o_content">
                            <div className="d-none d-md-flex o_expense_container position-sticky start-0 d-flex o_form_statusbar">
                                <div className="o_expense_card o_arrow_button flex-grow-1 d-flex flex-column p-3 border-bottom text-center cursor-pointer"
                                    data-tooltip="Expenses that need to be submitted to the approver.">
                                    <span className="h2 m-0 text-primary">
                                        1996.00₫
                                    </span>
                                    <b className="mx-2">
                                        to submit
                                    </b>
                                </div>
                                <div className="o_expense_card o_arrow_button flex-grow-1 d-flex flex-column p-3 border-bottom text-center">
                                    <i className="fa fa-angle-right fa-3x" />
                                </div>
                                <div className="o_expense_card o_arrow_button flex-grow-1 d-flex flex-column p-3 border-bottom text-center cursor-pointer"
                                    data-tooltip="Expenses from which the report has been submitted to the approver and is waiting for approval.">
                                    <span className="h2 m-0 text-primary">
                                        0.00₫
                                    </span>
                                    <b className="mx-2">
                                        under validation
                                    </b>
                                </div>
                                <div className="o_expense_card o_arrow_button flex-grow-1 d-flex flex-column p-3 border-bottom text-center">
                                    <i className="fa fa-angle-right fa-3x" />
                                </div>
                                <div className="o_expense_card o_arrow_button flex-grow-1 d-flex flex-column p-3 border-bottom text-center cursor-pointer"
                                    data-tooltip="Expenses paid by employee that are approved but not paid yet.">
                                    <span className="h2 m-0 text-primary">
                                        0.00₫
                                    </span>
                                    <b className="mx-2">
                                        to be reimbursed
                                    </b>
                                </div>
                            </div>
                            <div className="o_list_renderer hr_expense h-auto o_forbidden_tooltip_parent"
                                tabIndex={-1}>
                                <table className="o_list_table table table-sm table-hover position-relative mb-0 o_list_table_ungrouped table-striped"
                                    style={{ tableLayout: 'fixed' }}>
                                    <thead>
                                        <tr>
                                            <th className="o_list_record_selector o_list_controller align-middle pe-1 cursor-pointer"
                                                tabIndex={-1} style={{ width: 40 }}>
                                                <div className="o-checkbox form-check d-flex m-0">
                                                    <input type="checkbox" className="form-check-input" id="checkbox-comp-1"
                                                    />
                                                    <label className="form-check-label" htmlFor="checkbox-comp-1" />
                                                </div>
                                            </th>
                                            <th data-tooltip-delay={1000} tabIndex={-1} data-name="date" className="align-middle o_column_sortable position-relative cursor-pointer opacity-trigger-hover w-print-auto"
                                                data-tooltip-template="web.ListHeaderTooltip" data-tooltip-info="{&quot;viewMode&quot;:&quot;list&quot;,&quot;resModel&quot;:&quot;hr.expense&quot;,&quot;debug&quot;:false,&quot;field&quot;:{&quot;name&quot;:&quot;date&quot;,&quot;label&quot;:&quot;Expense Date&quot;,&quot;type&quot;:&quot;date&quot;,&quot;widget&quot;:null,&quot;context&quot;:&quot;{}&quot;,&quot;invisible&quot;:null,&quot;column_invisible&quot;:null,&quot;readonly&quot;:&quot;not is_editable&quot;,&quot;required&quot;:null,&quot;changeDefault&quot;:false}}"
                                                style={{ width: 91 }}>
                                                <div className="d-flex">
                                                    <span className="d-block min-w-0 text-truncate flex-grow-1">
                                                        Expense Date
                                                    </span>
                                                    <i className="fa fa-lg fa-angle-down opacity-0 opacity-75-hover" />
                                                </div>
                                                <span className="o_resize position-absolute top-0 end-0 bottom-0 ps-1 bg-black-25 opacity-0 opacity-50-hover z-1"
                                                />
                                            </th>
                                            <th data-tooltip-delay={1000} tabIndex={-1} data-name="name" className="align-middle o_column_sortable position-relative cursor-pointer opacity-trigger-hover w-print-auto"
                                                data-tooltip-template="web.ListHeaderTooltip" data-tooltip-info="{&quot;viewMode&quot;:&quot;list&quot;,&quot;resModel&quot;:&quot;hr.expense&quot;,&quot;debug&quot;:false,&quot;field&quot;:{&quot;name&quot;:&quot;name&quot;,&quot;label&quot;:&quot;Description&quot;,&quot;type&quot;:&quot;char&quot;,&quot;widget&quot;:null,&quot;context&quot;:&quot;{}&quot;,&quot;invisible&quot;:null,&quot;column_invisible&quot;:null,&quot;readonly&quot;:&quot;not is_editable&quot;,&quot;required&quot;:&quot;True&quot;,&quot;changeDefault&quot;:false}}"
                                                style={{ width: 335 }}>
                                                <div className="d-flex">
                                                    <span className="d-block min-w-0 text-truncate flex-grow-1">
                                                        Description
                                                    </span>
                                                    <i className="fa fa-lg fa-angle-down opacity-0 opacity-75-hover" />
                                                </div>
                                                <span className="o_resize position-absolute top-0 end-0 bottom-0 ps-1 bg-black-25 opacity-0 opacity-50-hover z-1"
                                                />
                                            </th>
                                            <th data-tooltip-delay={1000} tabIndex={-1} data-name="employee_id" className="align-middle o_column_sortable position-relative cursor-pointer o_many2one_avatar_user_cell opacity-trigger-hover w-print-auto"
                                                data-tooltip-template="web.ListHeaderTooltip" data-tooltip-info="{&quot;viewMode&quot;:&quot;list&quot;,&quot;resModel&quot;:&quot;hr.expense&quot;,&quot;debug&quot;:false,&quot;field&quot;:{&quot;name&quot;:&quot;employee_id&quot;,&quot;label&quot;:&quot;Employee&quot;,&quot;type&quot;:&quot;many2one&quot;,&quot;widget&quot;:&quot;many2one_avatar_user&quot;,&quot;widgetDescription&quot;:&quot;Many2one&quot;,&quot;context&quot;:&quot;{}&quot;,&quot;domain&quot;:&quot;(company_id and ['|', ('company_id', '=', False), ('company_id', 'in', [company_id])] or [('company_id', '=', False)]) + ([('filter_for_expense', '=', True)])&quot;,&quot;invisible&quot;:null,&quot;column_invisible&quot;:null,&quot;readonly&quot;:&quot;not is_editable&quot;,&quot;required&quot;:&quot;True&quot;,&quot;changeDefault&quot;:false,&quot;relation&quot;:&quot;hr.employee&quot;}}"
                                                style={{ width: 206 }}>
                                                <div className="d-flex">
                                                    <span className="d-block min-w-0 text-truncate flex-grow-1">
                                                        Employee
                                                    </span>
                                                    <i className="fa fa-lg fa-angle-down opacity-0 opacity-75-hover" />
                                                </div>
                                                <span className="o_resize position-absolute top-0 end-0 bottom-0 ps-1 bg-black-25 opacity-0 opacity-50-hover z-1"
                                                />
                                            </th>
                                            <th data-tooltip-delay={1000} tabIndex={-1} data-name="payment_mode" className="align-middle o_column_sortable position-relative cursor-pointer opacity-trigger-hover w-print-auto"
                                                data-tooltip-template="web.ListHeaderTooltip" data-tooltip-info="{&quot;viewMode&quot;:&quot;list&quot;,&quot;resModel&quot;:&quot;hr.expense&quot;,&quot;debug&quot;:false,&quot;field&quot;:{&quot;name&quot;:&quot;payment_mode&quot;,&quot;label&quot;:&quot;Paid By&quot;,&quot;type&quot;:&quot;selection&quot;,&quot;widget&quot;:null,&quot;context&quot;:&quot;{}&quot;,&quot;invisible&quot;:null,&quot;column_invisible&quot;:null,&quot;readonly&quot;:&quot;not is_editable&quot;,&quot;required&quot;:null,&quot;changeDefault&quot;:false,&quot;selection&quot;:[[&quot;own_account&quot;,&quot;Employee (to reimburse)&quot;],[&quot;company_account&quot;,&quot;Company&quot;]]}}"
                                                style={{ width: 258 }}>
                                                <div className="d-flex">
                                                    <span className="d-block min-w-0 text-truncate flex-grow-1">
                                                        Paid By
                                                    </span>
                                                    <i className="fa fa-lg fa-angle-down opacity-0 opacity-75-hover" />
                                                </div>
                                                <span className="o_resize position-absolute top-0 end-0 bottom-0 ps-1 bg-black-25 opacity-0 opacity-50-hover z-1"
                                                />
                                            </th>
                                            <th data-tooltip-delay={1000} tabIndex={-1} data-name="activity_ids" className="align-middle cursor-default o_list_activity_cell opacity-trigger-hover w-print-auto"
                                                data-tooltip-template="web.ListHeaderTooltip" data-tooltip-info="{&quot;viewMode&quot;:&quot;list&quot;,&quot;resModel&quot;:&quot;hr.expense&quot;,&quot;debug&quot;:false,&quot;field&quot;:{&quot;name&quot;:&quot;activity_ids&quot;,&quot;label&quot;:&quot;Activities&quot;,&quot;type&quot;:&quot;one2many&quot;,&quot;widget&quot;:&quot;list_activity&quot;,&quot;context&quot;:&quot;{}&quot;,&quot;domain&quot;:[],&quot;invisible&quot;:null,&quot;column_invisible&quot;:null,&quot;readonly&quot;:null,&quot;required&quot;:null,&quot;changeDefault&quot;:false,&quot;relation&quot;:&quot;mail.activity&quot;}}"
                                                style={{ width: 119 }}>
                                                <div className="d-flex">
                                                    <span className="d-block min-w-0 text-truncate flex-grow-1">
                                                        Activities
                                                    </span>
                                                    <i className="d-none fa-angle-down opacity-0 opacity-75-hover" />
                                                </div>
                                                <span className="o_resize position-absolute top-0 end-0 bottom-0 ps-1 bg-black-25 opacity-0 opacity-50-hover z-1"
                                                />
                                            </th>
                                            <th data-tooltip-delay={1000} tabIndex={-1} data-name="nb_attachment"
                                                className="align-middle cursor-default o_list_number_th o_nb_attachment_cell opacity-trigger-hover w-print-auto"
                                                data-tooltip-template="web.ListHeaderTooltip" data-tooltip-info="{&quot;viewMode&quot;:&quot;list&quot;,&quot;resModel&quot;:&quot;hr.expense&quot;,&quot;debug&quot;:false,&quot;field&quot;:{&quot;name&quot;:&quot;nb_attachment&quot;,&quot;label&quot;:&quot;Number of Attachments&quot;,&quot;type&quot;:&quot;integer&quot;,&quot;widget&quot;:&quot;nb_attachment&quot;,&quot;context&quot;:&quot;{}&quot;,&quot;invisible&quot;:null,&quot;column_invisible&quot;:null,&quot;readonly&quot;:&quot;True&quot;,&quot;required&quot;:null,&quot;changeDefault&quot;:false}}"
                                                style={{ width: 119 }} />
                                            <th data-tooltip-delay={1000} tabIndex={-1} data-name="total_amount" className="align-middle o_column_sortable position-relative cursor-pointer o_list_number_th o_monetary_cell opacity-trigger-hover w-print-auto"
                                                data-tooltip-template="web.ListHeaderTooltip" data-tooltip-info="{&quot;viewMode&quot;:&quot;list&quot;,&quot;resModel&quot;:&quot;hr.expense&quot;,&quot;debug&quot;:false,&quot;field&quot;:{&quot;name&quot;:&quot;total_amount&quot;,&quot;label&quot;:&quot;Total&quot;,&quot;type&quot;:&quot;monetary&quot;,&quot;widget&quot;:&quot;monetary&quot;,&quot;widgetDescription&quot;:&quot;Monetary&quot;,&quot;context&quot;:&quot;{}&quot;,&quot;invisible&quot;:null,&quot;column_invisible&quot;:null,&quot;readonly&quot;:&quot;not is_editable or product_has_cost&quot;,&quot;required&quot;:null,&quot;changeDefault&quot;:false}}"
                                                style={{ width: 134 }}>
                                                <div className="d-flex flex-row-reverse">
                                                    <span className="d-block min-w-0 text-truncate flex-grow-1 o_list_number_th">
                                                        Total
                                                    </span>
                                                    <i className="fa fa-lg fa-angle-down opacity-0 opacity-75-hover" />
                                                </div>
                                                <span className="o_resize position-absolute top-0 end-0 bottom-0 ps-1 bg-black-25 opacity-0 opacity-50-hover z-1"
                                                />
                                            </th>
                                            <th data-tooltip-delay={1000} tabIndex={-1} data-name="state" className="align-middle o_column_sortable position-relative cursor-pointer o_badge_cell opacity-trigger-hover w-print-auto"
                                                data-tooltip-template="web.ListHeaderTooltip" data-tooltip-info="{&quot;viewMode&quot;:&quot;list&quot;,&quot;resModel&quot;:&quot;hr.expense&quot;,&quot;debug&quot;:false,&quot;field&quot;:{&quot;name&quot;:&quot;state&quot;,&quot;label&quot;:&quot;Status&quot;,&quot;type&quot;:&quot;selection&quot;,&quot;widget&quot;:&quot;badge&quot;,&quot;widgetDescription&quot;:&quot;Badge&quot;,&quot;context&quot;:&quot;{}&quot;,&quot;invisible&quot;:null,&quot;column_invisible&quot;:null,&quot;readonly&quot;:&quot;True&quot;,&quot;required&quot;:null,&quot;changeDefault&quot;:false,&quot;selection&quot;:[[&quot;draft&quot;,&quot;To Report&quot;],[&quot;reported&quot;,&quot;To Submit&quot;],[&quot;submitted&quot;,&quot;Submitted&quot;],[&quot;approved&quot;,&quot;Approved&quot;],[&quot;done&quot;,&quot;Done&quot;],[&quot;refused&quot;,&quot;Refused&quot;]]}}"
                                                style={{ width: 129 }}>
                                                <div className="d-flex">
                                                    <span className="d-block min-w-0 text-truncate flex-grow-1">
                                                        Status
                                                    </span>
                                                    <i className="fa fa-lg fa-angle-down opacity-0 opacity-75-hover" />
                                                </div>
                                                <span className="o_resize position-absolute top-0 end-0 bottom-0 ps-1 bg-black-25 opacity-0 opacity-50-hover z-1"
                                                />
                                            </th>
                                            <th className="o_list_controller o_list_actions_header w-print-0 p-print-0 position-sticky end-0"
                                                style={{ width: 32 }}>
                                                <div className="o_optional_columns_dropdown d-print-none text-center border-top-0">
                                                    <button className="btn p-0 o-dropdown dropdown-toggle dropdown" tabIndex={-1}
                                                        aria-expanded="false">
                                                        <i className="o_optional_columns_dropdown_toggle oi oi-fw oi-settings-adjust"
                                                        />
                                                    </button>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="ui-sortable">
                                        <tr className="o_data_row text-info" data-id="datapoint_2">
                                            <td className="o_list_record_selector user-select-none" tabIndex={-1}>
                                                <div className="o-checkbox form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkbox-comp-2"
                                                    />
                                                    <label className="form-check-label" htmlFor="checkbox-comp-2" />
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell" data-tooltip-delay={1000}
                                                tabIndex={-1} name="date" />
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_char o_required_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="name" data-tooltip="food">
                                                food
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_many2one o_many2one_avatar_user_cell o_required_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="employee_id" data-tooltip="Trần Quốc Thái">
                                                <div name="employee_id" className="o_field_widget o_required_modifier o_field_many2one_avatar_user o_field_many2one_avatar">
                                                    <div className="d-flex align-items-center gap-1" data-tooltip="Trần Quốc Thái">
                                                        <span className="o_avatar o_m2o_avatar">
                                                            <img className="rounded" src="/web/image/hr.employee/1/avatar_128" />
                                                        </span>
                                                        <span>
                                                            <span>
                                                                Trần Quốc Thái
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell" data-tooltip-delay={1000}
                                                tabIndex={-1} name="payment_mode">
                                                Employee (to reimburse)
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_activity_cell"
                                                data-tooltip-delay={1000} tabIndex={-1} name="activity_ids">
                                                <div name="activity_ids" className="o_field_widget o_field_list_activity">
                                                    <a className="o-mail-ActivityButton" role="button" aria-label="Show activities"
                                                        title="Show activities">
                                                        <i className="fa fa-fw fa-lg text-muted fa-clock-o btn-link text-dark"
                                                            role="img" />
                                                    </a>
                                                    <span className="o-mail-ListActivity-summary" />
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_number o_nb_attachment_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="nb_attachment">
                                                <div name="nb_attachment" className="o_field_widget o_readonly_modifier o_field_nb_attachment">
                                                    <div>
                                                        <span className="fa fa-paperclip pe-1 align-middle" />
                                                        1
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_number o_monetary_cell"
                                                data-tooltip-delay={1000} tabIndex={-1} name="total_amount">
                                                <div name="total_amount" className="o_field_widget o_field_empty o_field_monetary fw-bold">
                                                    <span>
                                                        0&nbsp;₫
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_badge_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="state">
                                                <div name="state" className="o_field_widget o_readonly_modifier o_field_badge text-info">
                                                    <span className="badge rounded-pill text-bg-info">
                                                        To Report
                                                    </span>
                                                </div>
                                            </td>
                                            <td tabIndex={-1} className="w-print-0 p-print-0" />
                                        </tr>
                                        <tr className="o_data_row" data-id="datapoint_5">
                                            <td className="o_list_record_selector user-select-none" tabIndex={-1}>
                                                <div className="o-checkbox form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkbox-comp-3"
                                                    />
                                                    <label className="form-check-label" htmlFor="checkbox-comp-3" />
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="date">
                                                09/19/2024
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_char o_required_modifier o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="name" data-tooltip="tra tien mon an">
                                                tra tien mon an
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_many2one o_many2one_avatar_user_cell o_required_modifier o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="employee_id" data-tooltip="Trần Quốc Thái">
                                                <div name="employee_id" className="o_field_widget o_readonly_modifier o_required_modifier o_field_many2one_avatar_user o_field_many2one_avatar">
                                                    <div className="d-flex align-items-center gap-1" data-tooltip="Trần Quốc Thái">
                                                        <span className="o_avatar o_m2o_avatar">
                                                            <img className="rounded" src="/web/image/hr.employee/1/avatar_128" />
                                                        </span>
                                                        <span>
                                                            <span>
                                                                Trần Quốc Thái
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="payment_mode">
                                                Employee (to reimburse)
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_activity_cell"
                                                data-tooltip-delay={1000} tabIndex={-1} name="activity_ids">
                                                <div name="activity_ids" className="o_field_widget o_field_list_activity">
                                                    <a className="o-mail-ActivityButton" role="button" aria-label="Show activities"
                                                        title="Show activities">
                                                        <i className="fa fa-fw fa-lg text-muted fa-clock-o btn-link text-dark"
                                                            role="img" />
                                                    </a>
                                                    <span className="o-mail-ListActivity-summary" />
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_number o_nb_attachment_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="nb_attachment">
                                                <div name="nb_attachment" className="o_field_widget o_readonly_modifier o_field_empty o_field_nb_attachment">
                                                    <div>
                                                        <span className="fa fa-paperclip pe-1 align-middle" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_number o_monetary_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="total_amount">
                                                <div name="total_amount" className="o_field_widget o_readonly_modifier o_field_monetary fw-bold">
                                                    <span>
                                                        1,000,000&nbsp;₫
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_badge_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="state">
                                                <div name="state" className="o_field_widget o_readonly_modifier o_field_badge text-success">
                                                    <span className="badge rounded-pill text-bg-success">
                                                        Done
                                                    </span>
                                                </div>
                                            </td>
                                            <td tabIndex={-1} className="w-print-0 p-print-0" />
                                        </tr>
                                        <tr className="o_data_row text-info" data-id="datapoint_9">
                                            <td className="o_list_record_selector user-select-none" tabIndex={-1}>
                                                <div className="o-checkbox form-check">
                                                    <input type="checkbox" className="form-check-input" id="checkbox-comp-4"
                                                    />
                                                    <label className="form-check-label" htmlFor="checkbox-comp-4" />
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell" data-tooltip-delay={1000}
                                                tabIndex={-1} name="date">
                                                05/24/2024
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_char o_required_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="name" data-tooltip="Sample Receipt: External training">
                                                Sample Receipt: External training
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_many2one o_many2one_avatar_user_cell o_required_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="employee_id" data-tooltip="Trần Quốc Thái">
                                                <div name="employee_id" className="o_field_widget o_required_modifier o_field_many2one_avatar_user o_field_many2one_avatar">
                                                    <div className="d-flex align-items-center gap-1" data-tooltip="Trần Quốc Thái">
                                                        <span className="o_avatar o_m2o_avatar">
                                                            <img className="rounded" src="/web/image/hr.employee/1/avatar_128" />
                                                        </span>
                                                        <span>
                                                            <span>
                                                                Trần Quốc Thái
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell" data-tooltip-delay={1000}
                                                tabIndex={-1} name="payment_mode">
                                                Employee (to reimburse)
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_activity_cell"
                                                data-tooltip-delay={1000} tabIndex={-1} name="activity_ids">
                                                <div name="activity_ids" className="o_field_widget o_field_list_activity">
                                                    <a className="o-mail-ActivityButton" role="button" aria-label="Show activities"
                                                        title="Show activities">
                                                        <i className="fa fa-fw fa-lg text-muted fa-clock-o btn-link text-dark"
                                                            role="img" />
                                                    </a>
                                                    <span className="o-mail-ListActivity-summary" />
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_number o_nb_attachment_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="nb_attachment">
                                                <div name="nb_attachment" className="o_field_widget o_readonly_modifier o_field_nb_attachment">
                                                    <div>
                                                        <span className="fa fa-paperclip pe-1 align-middle" />
                                                        1
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_list_number o_monetary_cell"
                                                data-tooltip-delay={1000} tabIndex={-1} name="total_amount">
                                                <div name="total_amount" className="o_field_widget o_field_monetary fw-bold">
                                                    <span>
                                                        1,996&nbsp;₫
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="o_data_cell cursor-pointer o_field_cell o_badge_cell o_readonly_modifier"
                                                data-tooltip-delay={1000} tabIndex={-1} name="state">
                                                <div name="state" className="o_field_widget o_readonly_modifier o_field_badge text-info">
                                                    <span className="badge rounded-pill text-bg-info">
                                                        To Report
                                                    </span>
                                                </div>
                                            </td>
                                            <td tabIndex={-1} className="w-print-0 p-print-0" />
                                        </tr>
                                    </tbody>
                                    <tfoot className="o_list_footer cursor-default">
                                        <tr>
                                            <td />
                                            <td />
                                            <td />
                                            <td />
                                            <td />
                                            <td />
                                            <td />
                                            <td className="o_list_number">
                                                <span data-tooltip="Total Amount">
                                                    1,001,996&nbsp;₫
                                                </span>
                                            </td>
                                            <td />
                                            <td className="w-print-0 p-print-0" />
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="o-main-components-container">
                    <div className="o-mail-ChatHub">
                        <div className="o-mail-ChatHub-bubbles position-fixed end-0 d-flex flex-column align-content-start justify-content-end align-items-center bottom-0"
                            style={{}}>
                            <div className="d-flex flex-column align-content-start justify-content-end align-items-center gap-1"
                            />
                        </div>
                    </div>
                    <div className="o-overlay-container">
                        <div className="o-overlay-item" />
                        <div className="o-overlay-item" />
                        <div className="o-overlay-item" />
                        <div className="o-overlay-item" />
                    </div>
                    <div />
                    <div className="o_notification_manager o_upload_progress_toast" />
                    <div className="o_notification_manager" />
                </div>
            </div>
        </>
    );
};

export default Note;