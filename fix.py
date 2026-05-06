import sys

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_content = """                            <div class="product-footer">
                                <span class="product-code">Code: PP-EU-C</span>
                                <button class="btn btn-primary btn-sm" data-en="View Details" data-ar="??? ????????">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-item" data-filter-tags="Power Plug,European,Round Cord,Schuko" onclick="showProductModal('power-plug-eu-ef')">
                        <div class="product-badge" data-en="Heavy Duty" data-ar="???">Heavy Duty</div>
                        <div class="product-img">
                            <img src="images/cables/power-plug-eu-ef.png" alt="European Power Plug Type E/F">
                        </div>
                        <div class="product-info">
                            <h3 data-en="European Power Plug (Type E/F)" data-ar="???? ???? ??????">European Power Plug (Type E/F)</h3>
                            <p class="product-desc" data-en="European Power Plug, Contour Type, CEE 7/7 Schuko 16A - 250V, 2 Pole (Non-ground)." data-ar="???? ???? ??????? ??? ?????? ???? 16 ????? - 250 ????.">European Power Plug, Contour Type, CEE 7/7 Schuko 16A - 250V, 2 Pole (Non-ground).</p>
                            <div class="product-footer">
                                <span class="product-code">Code: PP-EU-EF</span>
                                <button class="btn btn-primary btn-sm" data-en="View Details" data-ar="??? ????????">View Details</button>
                            </div>
                        </div>
                    </div>
                    <div class="product-item" data-filter-tags="Power Plug,European,Round Cord,Schuko,Angle" onclick="showProductModal('power-plug-eu-ef-angle')">
                        <div class="product-badge" data-en="Heavy Duty" data-ar="???">Heavy Duty</div>
                        <div class="product-img">
                            <img src="images/cables/power-plug-eu-ef-angle.jpg" alt="European Power Plug Type E/F Angle">
                        </div>
                        <div class="product-info">
                            <h3 data-en="European Power Plug (Angle Type E/F)" data-ar="???? ???? ?????? ?????">European Power Plug (Angle Type E/F)</h3>
                            <p class="product-desc" data-en="European Power Plug, CEE 7/7 Schuko 16A - 250V Angle plug, 2 Pole (Non-ground)." data-ar="???? ???? ??????? ???? 16 ????? - 250 ???? ?????.">European Power Plug, CEE 7/7 Schuko 16A - 250V Angle plug, 2 Pole (Non-ground).</p>
                            <div class="product-footer">
                                <span class="product-code">Code: PP-EU-EF-ANG</span>
                                <button class="btn btn-primary btn-sm" data-en="View Details" data-ar="??? ????????">View Details</button>
                            </div>
                        </div>
                    </div>
"""

lines[104:119] = [new_content]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
