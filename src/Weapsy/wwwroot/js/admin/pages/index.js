﻿weapsy.admin.pageIndex = weapsy.admin.pageIndex || {};

weapsy.admin.pageIndex = (function ($) {
    $('.activate-page').click(function () {
        weapsy.utils.showLoading();
        var pageId = $(this).attr("data-page-id");
        var checked = $(this).is(":checked");
        var action = checked ? "activate" : "hide";
        $.ajax({
            url: "/api/page/" + pageId + "/" + action,
            type: "PUT"
        }).done(function () {
            weapsy.utils.showSuccess();
        }).fail(function () {
        });
    });

    var pageIdToDelete;

    $('.delete-page').click(function () {
        pageIdToDelete = $(this).attr("data-id");
    });

    $('#confirmDelete').click(function () {
        $('#deletingPage').show();
        $.ajax({
            url: "/api/page/" + pageIdToDelete,
            type: "DELETE"
        }).done(function () {
            $('#deletingPage').hide();
            window.location.href = '/admin/page'; // to do: just remove row
        }).fail(function () {
            $('#deletingPage').hide();
        });
    });
}(jQuery));