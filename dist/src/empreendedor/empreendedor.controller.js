"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpreendedorController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const fs_1 = require("fs");
const path_1 = require("path");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const roles_guard_1 = require("../common/guards/roles.guard");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const slug_util_1 = require("../common/utils/slug.util");
const empreendedor_dto_1 = require("./dto/empreendedor.dto");
const empreendedor_service_1 = require("./empreendedor.service");
const LOGO_DIR = (0, path_1.join)(process.cwd(), 'uploads', 'startups');
const LOGO_MIME = new Set([
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/gif',
    'image/svg+xml',
]);
function ensureLogoDir() {
    if (!(0, fs_1.existsSync)(LOGO_DIR)) {
        (0, fs_1.mkdirSync)(LOGO_DIR, { recursive: true });
    }
}
let EmpreendedorController = class EmpreendedorController {
    constructor(empreendedorService) {
        this.empreendedorService = empreendedorService;
    }
    me(req) {
        return this.empreendedorService.me(req.user.id);
    }
    update(req, dto) {
        return this.empreendedorService.update(req.user.id, dto);
    }
    uploadLogo(req, logo) {
        if (!logo) {
            throw new common_1.BadRequestException('Envie um arquivo de logo.');
        }
        return this.empreendedorService.updateLogo(req.user.id, `/uploads/startups/${logo.filename}`);
    }
    badges(req, dto) {
        return this.empreendedorService.setBadges(req.user.id, dto);
    }
    senha(req, dto) {
        return this.empreendedorService.definirSenha(req.user.id, dto);
    }
};
exports.EmpreendedorController = EmpreendedorController;
__decorate([
    (0, common_1.Get)('me'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EmpreendedorController.prototype, "me", null);
__decorate([
    (0, common_1.Patch)('inscricao'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, empreendedor_dto_1.UpdateInscricaoEmpreendedorDto]),
    __metadata("design:returntype", void 0)
], EmpreendedorController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('logo'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('logo', {
        storage: (0, multer_1.diskStorage)({
            destination: (_req, _file, cb) => {
                ensureLogoDir();
                cb(null, LOGO_DIR);
            },
            filename: (_req, file, cb) => {
                const ext = (0, path_1.extname)(file.originalname).toLowerCase() || '.png';
                cb(null, `startup-${Date.now()}-${(0, slug_util_1.randomSuffix)()}${ext}`);
            },
        }),
        limits: { fileSize: 2 * 1024 * 1024 },
        fileFilter: (_req, file, cb) => {
            if (!LOGO_MIME.has(file.mimetype)) {
                cb(new common_1.BadRequestException('Logo inválida. Envie PNG, JPG, WEBP, GIF ou SVG (máx. 2 MB).'), false);
                return;
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], EmpreendedorController.prototype, "uploadLogo", null);
__decorate([
    (0, common_1.Put)('badges'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, empreendedor_dto_1.SetBadgesDto]),
    __metadata("design:returntype", void 0)
], EmpreendedorController.prototype, "badges", null);
__decorate([
    (0, common_1.Put)('senha'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, empreendedor_dto_1.DefinirSenhaDto]),
    __metadata("design:returntype", void 0)
], EmpreendedorController.prototype, "senha", null);
exports.EmpreendedorController = EmpreendedorController = __decorate([
    (0, common_1.Controller)('api/v1/empreendedor'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('empreendedor'),
    __metadata("design:paramtypes", [empreendedor_service_1.EmpreendedorService])
], EmpreendedorController);
//# sourceMappingURL=empreendedor.controller.js.map