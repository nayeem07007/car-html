import "./style.scss";
import $ from 'jquery';

$(function(){
    $('.s-btn-shadow .accordion-siblings h6').on('click', function(){
        $(this).css("color", "#22B573");
        $(this).parent().siblings('.accordion-siblings').find('h6').css({"color": "#52575C",});
    });
});