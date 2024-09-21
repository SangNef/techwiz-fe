import React from 'react';
import { useNavigate } from "react-router-dom";


function Header() {
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate('/details');
        navigate('/Login');
        navigate('/Register');
        navigate('/Expense');
    };
    
    return (
        <>
            <div className="traveltour-header-background-transparent"><div className="traveltour-top-bar "><div className="traveltour-top-bar-background" /><div className="traveltour-top-bar-container clearfix traveltour-container "><div className="traveltour-top-bar-left traveltour-item-pdlr traveltour-right-with-border"><div className="traveltour-top-bar-left-text"><i className="fa fa-phone" style={{ fontSize: 16, color: '#ffffff', marginRight: 10 }} /> 1.820.3345.33
                <i className="fa fa-envelope-o" style={{ fontSize: 16, color: '#ffffff', marginLeft: 30, marginRight: 10 }} /> Contact@TravelTourWP.com</div></div><div className="traveltour-top-bar-right traveltour-item-pdlr traveltour-right-with-border"><div className="traveltour-top-bar-right-social"><a href="#" target="_blank" className="infinite-top-bar-social-icon" title="facebook"><i className="fa6b fa6-facebook" /></a><a href="#" target="_blank" className="infinite-top-bar-social-icon" title="flickr"><i className="fa6b fa6-flickr" /></a><a href="#" target="_blank" className="infinite-top-bar-social-icon" title="twitter"><i className="fa6b fa6-x-twitter" /></a></div><div className="tourmaster-user-top-bar tourmaster-guest tourmaster-style-1"><a className="tourmaster-user-top-bar-login" href="/Login"><i className="icon_lock_alt" /><span className="tourmaster-text">Login</span></a><a className="tourmaster-user-top-bar-signup" href="Register"><i className="fa fa-user" /><span className="tourmaster-text">Sign Up</span></a></div></div></div></div>
                <header className="traveltour-header-wrap traveltour-header-style-plain traveltour-style-menu-right traveltour-sticky-navigation traveltour-style-slide" style={{ display: 'block' }}>
                    <div className="traveltour-header-background" />
                    <div className="traveltour-header-container  traveltour-container">
                        <div className="traveltour-header-container-inner clearfix">
                            <div className="traveltour-logo  traveltour-item-pdlr"><div className="traveltour-logo-inner"><a className href="https://demo.goodlayers.com/traveltour/"><img src="https://i.postimg.cc/Hn0hmmHg/logo.png" /></a></div></div>			<div className="traveltour-navigation traveltour-item-pdlr clearfix ">
                                <div className="traveltour-main-menu sf-js-enabled sf-arrows" id="traveltour-main-menu" style={{ touchAction: 'pan-y' }}><ul id="menu-main-navigation-1" className="sf-menu"><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2039 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-4373 traveltour-normal-menu"><a href="https://demo.goodlayers.com/traveltour/" className="sf-with-ul-pre sf-with-ul">Home</a>
                                    <ul className="sub-menu" style={{ display: 'none' }}>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2039 current_page_item menu-item-4440" data-size={60}><a href="https://demo.goodlayers.com/traveltour/">Homepage 1</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4692" data-size={60}><a href="https://demo.goodlayers.com/traveltour/homepage-2/">Homepage 2</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4691" data-size={60}><a href="https://demo.goodlayers.com/traveltour/homepage-3/">Homepage 3</a></li>
                                        <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4690" data-size={60}><a href="https://demo.goodlayers.com/traveltour/homepage-4/">Homepage 4</a></li>
                                    </ul>
                                </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4341 traveltour-normal-menu"><a href="#" className="sf-with-ul-pre sf-with-ul">Pages</a>
                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4332" data-size={60}><a href="#" className="sf-with-ul-pre sf-with-ul">Features</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4876"><a href="#" className="sf-with-ul-pre sf-with-ul">Set 1</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4352"><a href="https://demo.goodlayers.com/traveltour/accordions-toggles/">Accordions &amp; Toggles</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4353"><a href="https://demo.goodlayers.com/traveltour/alert-box/">Alert Box</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4354"><a href="https://demo.goodlayers.com/traveltour/blockquotes/">Blockquotes</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4355"><a href="https://demo.goodlayers.com/traveltour/buttons/">Buttons</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4356"><a href="https://demo.goodlayers.com/traveltour/call-to-action/">Call To Action</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4357"><a href="https://demo.goodlayers.com/traveltour/column-services/">Column Services</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4358"><a href="https://demo.goodlayers.com/traveltour/columns/">Columns</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4877"><a href="#" className="sf-with-ul-pre sf-with-ul">Set 2</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4359"><a href="https://demo.goodlayers.com/traveltour/counters/">Counters</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4389"><a href="https://demo.goodlayers.com/traveltour/count-down/">Count Down</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4360"><a href="https://demo.goodlayers.com/traveltour/dividers/">Dividers</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4361"><a href="https://demo.goodlayers.com/traveltour/dropcaps/">Dropcaps</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4362"><a href="https://demo.goodlayers.com/traveltour/featured-boxes/">Featured Boxes</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4390"><a href="https://demo.goodlayers.com/traveltour/flip-boxes/">Flip Boxes</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4374"><a href="https://demo.goodlayers.com/traveltour/icon-list/">Icon Lists</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4878"><a href="#" className="sf-with-ul-pre sf-with-ul">Set 3</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4375"><a href="https://demo.goodlayers.com/traveltour/icons/">Icons</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4376"><a href="https://demo.goodlayers.com/traveltour/images/">Images</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4388"><a href="https://demo.goodlayers.com/traveltour/team-plain-style/">Personnel</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4377"><a href="https://demo.goodlayers.com/traveltour/price-table/">Price Table</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4378"><a href="https://demo.goodlayers.com/traveltour/promo-boxes/">Promo Boxes</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4379"><a href="https://demo.goodlayers.com/traveltour/skill-bar/">Skill Bar</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4380"><a href="https://demo.goodlayers.com/traveltour/skill-circle/">Skill Circle</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4879"><a href="#" className="sf-with-ul-pre sf-with-ul">Set 4</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4381"><a href="https://demo.goodlayers.com/traveltour/social-shares/">Social Shares</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4382"><a href="https://demo.goodlayers.com/traveltour/stunning-texts/">Stunning Texts</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4383"><a href="https://demo.goodlayers.com/traveltour/tabs-horizontal/">Tabs Horizontal</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4384"><a href="https://demo.goodlayers.com/traveltour/tabs-vertical/">Tabs Vertical</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4385"><a href="https://demo.goodlayers.com/traveltour/testimonial/">Testimonial</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4386"><a href="https://demo.goodlayers.com/traveltour/titles/">Titles</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4387"><a href="https://demo.goodlayers.com/traveltour/typography/">Typography</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4338" data-size={60}><a href="#" className="sf-with-ul-pre sf-with-ul">About</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4439"><a href="https://demo.goodlayers.com/traveltour/about-us/">About Us</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4363"><a href="https://demo.goodlayers.com/traveltour/about-us-2/">About Us 2</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4468"><a href="https://demo.goodlayers.com/traveltour/about-us-3/">About Us 3</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4469"><a href="https://demo.goodlayers.com/traveltour/about-our-team/">About Our Team</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4470" data-size={60}><a href="https://demo.goodlayers.com/traveltour/our-services/">Our Services</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4339" data-size={60}><a href="#" className="sf-with-ul-pre sf-with-ul">Contact</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4366"><a href="https://demo.goodlayers.com/traveltour/contact/">Contact</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4365"><a href="https://demo.goodlayers.com/traveltour/contact-2/">Contact 2</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4364"><a href="https://demo.goodlayers.com/traveltour/contact-3/">Contact 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4395" data-size={60}><a href="https://demo.goodlayers.com/traveltour/portfolio-3-columns/" className="sf-with-ul-pre sf-with-ul">Portfolio</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4342"><a className="sf-with-ul-pre sf-with-ul">Portfolio Grid</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4394"><a href="https://demo.goodlayers.com/traveltour/portfolio-2-columns/">Portfolio 2 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4393"><a href="https://demo.goodlayers.com/traveltour/portfolio-3-columns/">Portfolio 3 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4392"><a href="https://demo.goodlayers.com/traveltour/portfolio-4-columns/">Portfolio 4 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4391"><a href="https://demo.goodlayers.com/traveltour/portfolio-5-columns/">Portfolio 5 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4456"><a href="https://demo.goodlayers.com/traveltour/portfolio-2-columns-with-frame/">Portfolio 2 Columns With Frame</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4455"><a href="https://demo.goodlayers.com/traveltour/portfolio-3-columns-with-frame/">Portfolio 3 Columns With Frame</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4454"><a href="https://demo.goodlayers.com/traveltour/portfolio-4-columns-with-frame/">Portfolio 4 Columns With Frame</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4399"><a href="https://demo.goodlayers.com/traveltour/portfolio-2-columns-no-space/">Portfolio 2 Columns No Space</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4398"><a href="https://demo.goodlayers.com/traveltour/portfolio-3-columns-no-space/">Portfolio 3 Columns No Space</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4397"><a href="https://demo.goodlayers.com/traveltour/portfolio-4-columns-no-space/">Portfolio 4 Columns No Space</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4396"><a href="https://demo.goodlayers.com/traveltour/portfolio-5-columns-no-space/">Portfolio 5 Columns No Space</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4345"><a className="sf-with-ul-pre sf-with-ul">Portfolio Masonry</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4453"><a href="https://demo.goodlayers.com/traveltour/portfolio-masonry-4-columns/">Masonry 4 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4451"><a href="https://demo.goodlayers.com/traveltour/portfolio-masonry-3-columns/">Masonry 3 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4449"><a href="https://demo.goodlayers.com/traveltour/portfolio-masonry-2-columns/">Masonry 2 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4452"><a href="https://demo.goodlayers.com/traveltour/portfolio-masonry-4-columns-no-space/">Masonry 4 Columns No Space</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4450"><a href="https://demo.goodlayers.com/traveltour/portfolio-masonry-3-columns-no-space/">Masonry 3 Columns No Space</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4448"><a href="https://demo.goodlayers.com/traveltour/portfolio-masonry-2-columns-no-space/">Masonry 2 Columns No Space</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4343"><a className="sf-with-ul-pre sf-with-ul">Portfolio Modern</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4407"><a href="https://demo.goodlayers.com/traveltour/portfolio-modern-2-columns/">Modern 2 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4405"><a href="https://demo.goodlayers.com/traveltour/portfolio-modern-3-columns/">Modern 3 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4403"><a href="https://demo.goodlayers.com/traveltour/portfolio-modern-4-columns/">Modern 4 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4401"><a href="https://demo.goodlayers.com/traveltour/portfolio-modern-5-columns/">Modern 5 Columns</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4406"><a href="https://demo.goodlayers.com/traveltour/portfolio-modern-2-columns-no-space/">Modern 2 Columns No Space</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4404"><a href="https://demo.goodlayers.com/traveltour/portfolio-modern-3-columns-no-space/">Modern 3 Columns No Space</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4402"><a href="https://demo.goodlayers.com/traveltour/portfolio-modern-4-columns-no-space/">Modern 4 Columns No Space</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4400"><a href="https://demo.goodlayers.com/traveltour/portfolio-modern-5-columns-no-space/">Modern 5 Columns No Space</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4344"><a className="sf-with-ul-pre sf-with-ul">Portfolio Side Thumbnail</a>
                                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4408"><a href="https://demo.goodlayers.com/traveltour/portfolio-left-right-large-thumbnail/">Portfolio Left &amp; Right Large Thumbnail</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4410"><a href="https://demo.goodlayers.com/traveltour/portfolio-left-large-thumbnail/">Portfolio Left Large Thumbnail</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4409"><a href="https://demo.goodlayers.com/traveltour/portfolio-right-large-thumbnail/">Portfolio Right Large Thumbnail</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4411"><a href="https://demo.goodlayers.com/traveltour/portfolio-left-right-small-thumbnail/">Portfolio Left &amp; Right Small Thumbnail</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4413"><a href="https://demo.goodlayers.com/traveltour/portfolio-left-small-thumbnail/">Portfolio Left Small Thumbnail</a></li>
                                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4412"><a href="https://demo.goodlayers.com/traveltour/portfolio-right-small-thumbnail/">Portfolio Right Small Thumbnail</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4477" data-size={60}><a href="https://demo.goodlayers.com/traveltour/gallery/">Gallery</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4340" data-size={60}><a href="#" className="sf-with-ul-pre sf-with-ul">Team</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4369"><a href="https://demo.goodlayers.com/traveltour/team-plain-style/">Team / Plain Style</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4367"><a href="https://demo.goodlayers.com/traveltour/team-thumbnail-style/">Team / Thumbnail Style</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4368"><a href="https://demo.goodlayers.com/traveltour/team-frame-style/">Team / Frame Style</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-5087" data-size={60}><a href="#" className="sf-with-ul-pre sf-with-ul">Product</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5086"><a href="https://demo.goodlayers.com/traveltour/shop-2/">Woocommerce Shop Archive</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5085"><a href="https://demo.goodlayers.com/traveltour/cart-2/">Cart</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5084"><a href="https://demo.goodlayers.com/traveltour/checkout-2/">Checkout</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5083"><a href="https://demo.goodlayers.com/traveltour/my-account-2/">My Account</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4370" data-size={60}><a href="https://demo.goodlayers.com/traveltour/price-table/">Price Table</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4371" data-size={60}><a href="https://demo.goodlayers.com/traveltour/maintenance/">Maintenance</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4372" data-size={60}><a href="https://demo.goodlayers.com/traveltour/coming-soon/">Coming Soon</a></li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4334" data-size={60}><a href="https://demo.goodlayers.com/traveltour/404">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4716 traveltour-normal-menu"><a href="/Expense" className="sf-with-ul-pre sf-with-ul">Tour List</a>
                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4731" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour-full-with-frame-right-sidebar/" className="sf-with-ul-pre sf-with-ul">Tour Full</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4620"><a href="https://demo.goodlayers.com/traveltour/tour-full-width/">Tour Full Right Sidebar</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4714"><a href="https://demo.goodlayers.com/traveltour/tour-full-left-sidebar/">Tour Full Left Sidebar</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4712"><a href="https://demo.goodlayers.com/traveltour/tour-full-with-frame-right-sidebar/">Tour Full With Frame Right Sidebar</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4713"><a href="https://demo.goodlayers.com/traveltour/tour-full-with-frame-left-sidebar/">Tour Full With Frame Left Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4732" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour-side-thumbnail-with-frame-right-sidebar/" className="sf-with-ul-pre sf-with-ul">Tour Side Thumbnail</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4727"><a href="https://demo.goodlayers.com/traveltour/tour-side-thumbnail-with-frame-right-sidebar/">Tour Side Thumbnail With Frame Right Sidebar</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4733"><a href="https://demo.goodlayers.com/traveltour/tour-side-thumbnail-with-frame-left-sidebar/">Tour Side Thumbnail With Frame Left Sidebar</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4728"><a href="https://demo.goodlayers.com/traveltour/tour-side-thumbnail-right-sidebar/">Tour Side Thumbnail Right Sidebar</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4726"><a href="https://demo.goodlayers.com/traveltour/tour-side-thumbnail-left-sidebar/">Tour Side Thumbnail Left Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4758" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-style-3-columns/" className="sf-with-ul-pre sf-with-ul">Tour Thumbnail Style</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4755"><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-style-2-columns/">Tour Thumbnail Style 2 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4759"><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-style-3-columns/">Tour Thumbnail Style 3 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4757"><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-style-4-columns/">Tour Thumbnail Style 4 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4756"><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-style-5-columns/">Tour Thumbnail Style 5 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4754"><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-no-space-2-columns/">Tour Thumbnail No Space 2 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4753"><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-no-space-3-columns/">Tour Thumbnail No Space 3 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4752"><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-no-space-4-columns/">Tour Thumbnail No Space 4 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4751"><a href="https://demo.goodlayers.com/traveltour/tour-thumbnail-no-space-5-columns/">Tour Thumbnail No Space 5 Columns</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4790" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour-classic-3-columns/" className="sf-with-ul-pre sf-with-ul">Tour Classic</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4789"><a href="https://demo.goodlayers.com/traveltour/tour-classic-2-columns/">Tour Classic 2 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4788"><a href="https://demo.goodlayers.com/traveltour/tour-classic-3-columns/">Tour Classic 3 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4787"><a href="https://demo.goodlayers.com/traveltour/tour-classic-4-columns/">Tour Classic 4 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4786"><a href="https://demo.goodlayers.com/traveltour/tour-classic-5-columns/">Tour Classic 5 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4802"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-frame-2-columns/">Tour Classic With Frame 2 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4801"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-frame-3-columns/">Tour Classic With Frame 3 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4800"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-frame-4-columns/">Tour Classic With Frame 4 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4799"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-frame-5-columns/">Tour Classic With Frame 5 Columns</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4818" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-detail-3-columns/" className="sf-with-ul-pre sf-with-ul">Tour Classic With Detail</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4817"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-detail-2-columns/">Tour Classic With Detail 2 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4816"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-detail-3-columns/">Tour Classic With Detail 3 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4815"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-detail-4-columns/">Tour Classic With Detail 4 Columns</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4829" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-custom-excerpt-3-columns/" className="sf-with-ul-pre sf-with-ul">Tour Classic With Custom Excerpt</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4828"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-custom-excerpt-2-columns/">Tour Classic With Custom Excerpt 2 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4827"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-custom-excerpt-3-columns/">Tour Classic With Custom Excerpt 3 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4826"><a href="https://demo.goodlayers.com/traveltour/tour-classic-with-custom-excerpt-4-columns/">Tour Classic With Custom Excerpt 4 Columns</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4864 traveltour-normal-menu">  <a href="/details" onClick={handleNavigation}>Destinations</a>
                                    </li>
                                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4867 traveltour-normal-menu"><a href="#" className="sf-with-ul-pre sf-with-ul">Date &amp; Pricing</a>
                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-5294" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/finland-helsinki-santa-claus-town-8-days/">Multiple Packages</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-4865" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/america-grand-canyon-golden-gate-bridge-las-vegas/">Multiple Day – Recurring</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-4874" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/china-suzhou-and-zhouzhuang-water-village/">Multiple Date – One Time</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-4871" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/pais-eiffel-tower-notre-dame-cathedral-champs-elysees-arc-of-triumph-day-tour/">One Day – Recurring</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-4873" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/africa-amazing-african-safari/">One Day – One Time</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-4872" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/alcatraz-tour-plus-muir-woods-golden-gate-and-sausalito-day-trip/">Variable Pricing</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-4868" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/dubai-all-stunning-places/">Fixed Price / Person</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-4869" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/switzerland-7-days-in-zurich-zermatt/">Room Based Pricing</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-4870" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/italy-6-days-in-rome-venice-milan/">No Room Based Pricing</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-tour menu-item-5070" data-size={60}><a href="https://demo.goodlayers.com/traveltour/tour/america-2-days-in-lake-tahoe/">Referral (link to external website)</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4975 traveltour-normal-menu"><a href="https://demo.goodlayers.com/traveltour/test-the-system/" className="sf-with-ul-pre sf-with-ul">Tour System</a>
                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4974" data-size={60}><a href="https://demo.goodlayers.com/traveltour/test-the-system/">Test system as customer</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-5001" data-size={60}><a href="https://demo.goodlayers.com/traveltour/how-the-payment-works/">How the payment works</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4933" data-size={60}><a href="https://demo.goodlayers.com/traveltour/admin-transaction-page/">Admin – Transaction Page</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4932" data-size={60}><a href="https://demo.goodlayers.com/traveltour/admin-single-transaction/">Admin – Single Transaction</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4966" data-size={60}><a href="https://demo.goodlayers.com/traveltour/customer-dashboard/">Customer – Dashboard</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4965" data-size={60}><a href="https://demo.goodlayers.com/traveltour/customer-bookings/">Customer – Bookings</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4963" data-size={60}><a href="https://demo.goodlayers.com/traveltour/customer-invoice/">Customer – Invoice</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4964" data-size={60}><a href="https://demo.goodlayers.com/traveltour/customer-review/">Customer – Review</a></li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4962" data-size={60}><a href="https://demo.goodlayers.com/traveltour/customer-wishlist/">Customer – Wishlist</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4436 traveltour-normal-menu"><a href="https://demo.goodlayers.com/traveltour/blog-full-right-sidebar-with-frame/" className="sf-with-ul-pre sf-with-ul">Blog</a>
                                        <ul className="sub-menu" style={{ display: 'none' }}>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4437" data-size={60}><a href="https://demo.goodlayers.com/traveltour/blog-full-right-sidebar-with-frame/" className="sf-with-ul-pre sf-with-ul">Blog Full</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4422"><a href="https://demo.goodlayers.com/traveltour/blog-full-right-sidebar-with-frame/">Blog Full Right Sidebar With Frame</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4421"><a href="https://demo.goodlayers.com/traveltour/blog-full-left-sidebar-with-frame/">Blog Full Left Sidebar With Frame</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4420"><a href="https://demo.goodlayers.com/traveltour/blog-full-both-sidebar-with-frame/">Blog Full Both Sidebar With Frame</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4425"><a href="https://demo.goodlayers.com/traveltour/blog-full-right-sidebar/">Blog Full Right Sidebar</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4424"><a href="https://demo.goodlayers.com/traveltour/blog-full-left-sidebar/">Blog Full Left Sidebar</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4423"><a href="https://demo.goodlayers.com/traveltour/blog-full-both-sidebar/">Blog Full Both Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4429" data-size={60}><a href="https://demo.goodlayers.com/traveltour/blog-grid-3-columns-no-space/" className="sf-with-ul-pre sf-with-ul">Blog Grid</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4432"><a href="https://demo.goodlayers.com/traveltour/blog-grid-2-columns/">Blog Grid 2 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4431"><a href="https://demo.goodlayers.com/traveltour/blog-grid-3-columns/">Blog Grid 3 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4430"><a href="https://demo.goodlayers.com/traveltour/blog-grid-4-columns/">Blog Grid 4 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4428"><a href="https://demo.goodlayers.com/traveltour/blog-grid-2-columns-no-space/">Blog Grid 2 Columns No Space</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4427"><a href="https://demo.goodlayers.com/traveltour/blog-grid-3-columns-no-space/">Blog Grid 3 Columns No Space</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4426"><a href="https://demo.goodlayers.com/traveltour/blog-grid-4-columns-no-space/">Blog Grid 4 Columns No Space</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4438" data-size={60}><a href="https://demo.goodlayers.com/traveltour/blog-3-columns-with-frame/" className="sf-with-ul-pre sf-with-ul">Blog Columns</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4416"><a href="https://demo.goodlayers.com/traveltour/blog-2-columns-with-frame/">Blog 2 Columns With Frame</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4415"><a href="https://demo.goodlayers.com/traveltour/blog-3-columns-with-frame/">Blog 3 Columns With Frame</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4414"><a href="https://demo.goodlayers.com/traveltour/blog-4-columns-with-frame/">Blog 4 Columns With Frame</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4419"><a href="https://demo.goodlayers.com/traveltour/blog-2-columns/">Blog 2 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4418"><a href="https://demo.goodlayers.com/traveltour/blog-3-columns/">Blog 3 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4417"><a href="https://demo.goodlayers.com/traveltour/blog-4-columns/">Blog 4 Columns</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4478"><a href="https://demo.goodlayers.com/traveltour/blog-3-columns-with-frame-post-format/">Blog Columns With Post Format</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-4346" data-size={60}><a href="#" className="sf-with-ul-pre sf-with-ul">Single Posts</a>
                                                <ul className="sub-menu" style={{ display: 'none' }}>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4466"><a href="https://demo.goodlayers.com/traveltour/standard-post-type/">Standard Post Format</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4463"><a href="https://demo.goodlayers.com/traveltour/introducing-this-amazing-city/">Custom Layout 1</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4465"><a href="https://demo.goodlayers.com/traveltour/separated-they-live-in-bookmarksgrove/">Custom Layout 2</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4459"><a href="https://demo.goodlayers.com/traveltour/even-the-all-powerful-pointing/">Custom Layout 3</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4457"><a href="https://demo.goodlayers.com/traveltour/aside-post-format/">Aside Post Format</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4458"><a href="https://demo.goodlayers.com/traveltour/audio-post-format/">Audio Post Format</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4460"><a href="https://demo.goodlayers.com/traveltour/gallery-post-format/">Gallery Post Format</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4461"><a href="https://demo.goodlayers.com/traveltour/image-post-format/">Image Post Format</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4462"><a href="https://demo.goodlayers.com/traveltour/link-post-format/">Link Post Format</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4464"><a href="https://demo.goodlayers.com/traveltour/quote-post-format/">Quote Post Format</a></li>
                                                    <li className="menu-item menu-item-type-post_type menu-item-object-post menu-item-4467"><a href="https://demo.goodlayers.com/traveltour/video-post-format/">Video Post Format</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul></div><div className="traveltour-main-menu-right-wrap clearfix "><div className="traveltour-main-menu-search" id="traveltour-top-search"><i className="fa fa-search" /></div>
                                </div>			</div>{/* traveltour-navigation */}
                        </div>{/* traveltour-header-inner */}
                    </div>{/* traveltour-header-container */}
                </header>{/* header */}</div>

        </>

    );
}

export default Header;

