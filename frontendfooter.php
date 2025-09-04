</div>
</div>
</div><!-- ENDOF #mainContent-->
</div><!-- ENDOF .wrapper -->
</div><!-- ENDOF #container -->

<div id="footer">
    <div class="px-4">
        All Rights Reserved - &copy; 2012 - <span id="ugx-footer-year">2025</span> UGX-Mods<br />
        <a href="https://www.ugx-mods.com/legal-notice" target="_blank" title="Legal Notice">Legal Notice</a> -
        <a href="https://www.ugx-mods.com/privacy-policy" target="_blank" title="Privacy Policy">Privacy Policy</a>
    </div>
    <div id="footerframe">
        <ul class="list-unstyled">
            <li>&nbsp;</li>
        </ul>
    </div>
</div>

<script type="text/javascript" src="admin/ui/phplist-ui-bootlist/js/jquery.min.js"></script>
<script type="text/javascript" src="admin/js/phplistapp.js"></script>
<script type="text/javascript" src="admin/ui/phplist-ui-bootlist/js/dist/phpList_ui_bootlist.min.js"></script>
<script>
    /* do not remove this from here */
    $(document).ready(function () {
        if ($('body').hasClass('invisible')) {
            applyCustomFormatting(); applyJqueryUiTabMigration();
        }
        $('#edit_list_categories input.form-control').tagsinput('refresh');
        $('div.radio').each(function () {
            const $el = $(this);
            if ($el.hasClass('radio-inline')) {
                $el.addClass('is-inline-fix').removeClass('radio-inline');
            }
            $el.addClass('ugx-radio-fix').removeClass('radio');
        });
        $('li.list.form-group label.btn.btn-default').each(function () {
            const $el = $(this);
            $el.removeClass('btn').removeClass('btn-default');

            const $glyph = $el.children('span');
            if ($glyph.length) {
                $glyph.addClass($glyph.hasClass('glyphicon-ok') ? 'text-success' : 'text-danger');
            }
        });
        $('body.fixed .required').removeClass('text-danger').addClass('text-warning');
        $('body.fixed div.error .required').text(function (i, old) { return old.replace(' red', ''); });
        $('#ugx-footer-year').text((new Date()).getFullYear());
    });
</script>
</body>

</html>